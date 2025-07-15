<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Логирование для отладки
file_put_contents('form_log.txt', date('Y-m-d H:i:s')." - Получены данные\n", FILE_APPEND);

// Получаем данные из формы
$data = json_decode(file_get_contents('php://input'), true);

// Проверяем обязательные поля
if (empty($data['name']) || empty($data['tel']) || empty($data['email'])) {
    file_put_contents('form_log.txt', "Ошибка: Не заполнены обязательные поля\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Поля имя, телефон и email обязательны для заполнения']);
    exit;
}

// Валидация email
if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    file_put_contents('form_log.txt', "Ошибка: Некорректный email\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Некорректный email']);
    exit;
}

// Валидация телефона
$phone = preg_replace('/[^0-9]/', '', $data['tel']);
if (strlen($phone) !== 11) {
    file_put_contents('form_log.txt', "Ошибка: Некорректный телефон\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Некорректный номер телефона. Должно быть 11 цифр']);
    exit;
}

// Подготовка письма
$to = 'm.finageev@mail.ru';
$subject = 'Новая заявка с сайта '.$_SERVER['HTTP_HOST'];
$message = "
<html>
<head>
    <title>Новая заявка</title>
</head>
<body>
    <h2>Новая заявка с сайта</h2>
    <p><strong>Имя:</strong> ".htmlspecialchars($data['name'])."</p>
    <p><strong>Телефон:</strong> ".htmlspecialchars($data['tel'])."</p>
    <p><strong>Email:</strong> ".htmlspecialchars($data['email'])."</p>
    <p><strong>Сообщение:</strong> ".(!empty($data['msg']) ? htmlspecialchars($data['msg']) : 'Не указано')."</p>
    <p><strong>Дата:</strong> ".date('d.m.Y H:i')."</p>
</body>
</html>
";

// Заголовки письма
$headers = "From: no-reply@".$_SERVER['HTTP_HOST']."\r\n";
$headers .= "Reply-To: ".htmlspecialchars($data['email'])."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

file_put_contents('form_log.txt', "Попытка отправки письма на: $to\n", FILE_APPEND);

// Отправка письма
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    file_put_contents('form_log.txt', "Успех: Письмо отправлено\n", FILE_APPEND);
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена!']);
} else {
    file_put_contents('form_log.txt', "Ошибка: Письмо не отправлено\n", FILE_APPEND);
    $error = error_get_last();
    file_put_contents('form_log.txt', "Детали ошибки: ".print_r($error, true)."\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'Ошибка сервера при отправке заявки. Администратор уведомлен.']);
}
?>