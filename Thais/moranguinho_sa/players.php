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
        case 'create':
            $name = $_POST['name'] ?? '';
            $nationality = $_POST['nationality'] ?? '';
            $age = $_POST['age'] ?? '';
            $email = $_POST['email'] ?? '';

            if (empty($name) || empty($nationality) || empty($age) || empty($email)) {
                throw new Exception("All fields are required.");
            }

            $stmt = $conn->prepare("INSERT INTO players (name, nationality, age, email) VALUES (?, ?, ?, ?)");
            if ($stmt->execute([$name, $nationality, $age, $email])) {
                $response = ["message" => "Player created successfully"];
            } else {
                throw new Exception("Error creating player.");
            }
            break;

        case 'read':
            $stmt = $conn->query("SELECT id_player, name, nationality, age, email FROM players");
            $players = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response = $players ?: [];
            break;

        case 'update':
            $id = $_POST['id'] ?? '';
            $name = $_POST['name'] ?? '';
            $nationality = $_POST['nationality'] ?? '';
            $age = $_POST['age'] ?? '';
            $email = $_POST['email'] ?? '';

            if (empty($id) || empty($name) || empty($nationality) || empty($age) || empty($email)) {
                throw new Exception("All fields are required.");
            }

            $stmt = $conn->prepare("UPDATE players SET name = ?, nationality = ?, age = ?, email = ? WHERE id_player = ?");
            if ($stmt->execute([$name, $nationality, $age, $email, $id])) {
                $response = ["message" => "Player updated successfully"];
            } else {
                throw new Exception("Error updating player.");
            }
            break;

        case 'delete':
            $id = $_POST['id'] ?? '';

            if (empty($id)) {
                throw new Exception("ID is required.");
            }

            $stmt = $conn->prepare("DELETE FROM players WHERE id_player = ?");
            if ($stmt->execute([$id])) {
                $response = ["message" => "Player deleted successfully"];
            } else {
                throw new Exception("Error deleting player.");
            }
            break;

        default:
            throw new Exception("Invalid action.");
    }

    echo json_encode($response);
} catch (Exception $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
