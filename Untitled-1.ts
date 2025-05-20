<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Gadai Admin Paneli</title>
  <script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
    import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

    const firebaseConfig = {
      apiKey: "AIzaSyB4lycSF47Mnk49ASWYXd_gjzcf5l4u2dQ",
      authDomain: "gadai-f241f.firebaseapp.com",
      databaseURL: "https://gadai-f241f-default-rtdb.firebaseio.com",
      projectId: "gadai-f241f",
      storageBucket: "gadai-f241f.firebasestorage.app",
      messagingSenderId: "368412892053",
      appId: "1:368412892053:web:932b828a28b59e8ce7f49c",
      measurementId: "G-26RBWN12W8"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    const orderList = document.getElementById("orders");

    onChildAdded(ref(db, "orders"), (snapshot) => {
      const order = snapshot.val();
      const li = document.createElement("li");
      li.textContent = ${order.product} - ${order.quantity} adet - ${order.price} TL;
      orderList.appendChild(li);
    });
  </script>
</head>
<body>
  <h1>Gadai Admin Paneli</h1>
  <ul id="orders"></ul>
</body>
</html>