<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Получаем данные из формы
$data = json_decode(file_get_contents('php://input'), true);

// Проверяем обязательные поля
if (empty($data['name']) || empty($data['tel']) || empty($data['event']) || empty($data['date'])) {
    echo json_encode(['success' => false, 'message' => 'Поля имя, телефон, мероприятие и дата обязательны для заполнения']);
    exit;
}

// Валидация телефона
$phone = preg_replace('/[^0-9]/', '', $data['tel']);
if (strlen($phone) !== 11) {
    echo json_encode(['success' => false, 'message' => 'Некорректный номер телефона. Должно быть 11 цифр']);
    exit;
}

// Подготовка письма
$to = 'm.finageev@mail.ru'; // Замените на нужный email
$subject = 'Новая заявка на мероприятие с сайта '.$_SERVER['HTTP_HOST'];
$message = "
<html>
<head>
    <title>Новая заявка на мероприятие</title>
</head>
<body>
    <h2>Новая заявка на мероприятие</h2>
    <p><strong>Имя:</strong> ".htmlspecialchars($data['name'])."</p>
    <p><strong>Телефон:</strong> ".htmlspecialchars($data['tel'])."</p>
    <p><strong>Мероприятие:</strong> ".htmlspecialchars($data['event'])."</p>
    <p><strong>Дата:</strong> ".htmlspecialchars($data['date'])."</p>
    <p><strong>Сообщение:</strong> ".(!empty($data['msg']) ? htmlspecialchars($data['msg']) : 'Не указано')."</p>
    <p><strong>Дата заявки:</strong> ".date('d.m.Y H:i')."</p>
</body>
</html>
";

// Заголовки письма
$headers = "From: no-reply@".$_SERVER['HTTP_HOST']."\r\n";
$headers .= "Reply-To: no-reply@".$_SERVER['HTTP_HOST']."\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/".phpversion();

// Отправка письма
$mailSent = mail($to, $subject, $message, $headers);

if ($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Ошибка сервера при отправке заявки. Пожалуйста, попробуйте позже.']);
}
?>