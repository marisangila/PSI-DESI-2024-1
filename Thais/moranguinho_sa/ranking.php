<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

require 'db.php';

$action = $_POST['action'] ?? '';
$response = [];

try {
    if (!isset($conn)) {
        throw new Exception("Database connection not established.");
    }

    switch ($action) {
        case 'save_score':
            $id = $_POST['id'] ?? '';
            $pontuacao = $_POST['pontuacao'] ?? '';

            if (empty($id) || empty($pontuacao)) {
                throw new Exception("All fields are required.");
            }

            $stmt = $conn->prepare("INSERT INTO ranking (pk_id_player, pontuacao) VALUES (?, ?)");
            if ($stmt->execute([$id, $pontuacao])) {
                $response = ["message" => "Score saved successfully"];
            } else {
                throw new Exception("Error saving score.");
            }
            break;

        case 'get_ranking':
            $stmt = $conn->query("SELECT players.name, ranking.pontuacao FROM ranking INNER JOIN players ON ranking.pk_id_player = players.id_player ORDER BY ranking.pontuacao DESC");
            if (!$stmt) {
                throw new Exception($conn->error);
            }
            $ranking = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response = $ranking ?: [];
            break;

        default:
            throw new Exception("Invalid action.");
    }

    echo json_encode($response);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
