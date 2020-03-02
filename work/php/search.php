<?php $headerTitle = "Search DB"; include 'view/header.php';



require "connect.php";
require "dbTryCatch.php";

// Get incoming values
$search = $_GET["search"] ?? null;
$like = "%$search%";
//var_dump($_GET);

if ($search) {
    // Connect to the database
    $db = connectDatabase($dsn);

    // Prepare and execute the SQL statement
    $sql = <<<EOD
SELECT
    *
FROM tech
WHERE
    id = ?
    OR label LIKE ?
    OR type LIKE ?
;
EOD;
    $stmt = $db->prepare($sql);
    $stmt->execute([$search, $like, $like]);

    // Get the results as an array with column names as array keys
    $res = $stmt->fetchAll();
}




?><h2>Search the database</h2>

<form>
    <p>
        <label>Search: 
            <input type="text" name="search" value="<?= $search ?>">
        </label>
    </p>
</form>

<?php if ($search) : ?>
    <table>
        <tr>
            <th>Id</th>
            <th>Label</th>
            <th>Type</th>
        </tr>

    <?php foreach ($res as $row) : ?>
        <tr>
            <td><?= $row["id"] ?></td>
            <td><?= $row["label"] ?></td>
            <td><?= $row["type"] ?></td>
        </tr>
    <?php endforeach; ?>

    </table>
    
    <?php include 'view/footer.php';?>
<?php endif; ?>

