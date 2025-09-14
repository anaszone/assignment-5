console.log("added ok");

const button = document.getElementById("btn-1");

document.getElementById("btn-1").addEventListener("click", function () {
  //   console.log("click hoise");

  // button.disabled = true;

  const cartTitle = document.getElementById("cart-1").innerText;
  // alert(cartTitle);

  alert("Congratulations! Your Task [ " + cartTitle + " ] is Completed.");

  const task = document.getElementById("task-assigned").innerText;
  console.log(task);
  let taskNumber = parseFloat(task);
  taskNumber--;
  document.getElementById("task-assigned").innerText = taskNumber;

  const point = document.getElementById("point-number").innerText;
  let pointNumber = parseFloat(point);
  pointNumber++;
  document.getElementById("point-number").innerText = pointNumber;

  button.disabled = true;
  button.classList.add("opacity-10", "cursor-not-allowed");

  
});

// for live date and time

// function updateDateTime(){
//     const now = new Date();

//     const day = now.toLocaleDateString( 'en-us', { weekday: 'long'} );
//     const date = now.toLocaleDateString(en-us);
//     const time = now.toLocaleTimeString();

//     document.getElementById('time-date').innerText = ${day}, ${date} - ${time};

//     updateDateTime();

//     setInterval(updateDateTime, 1000);
// }

function updateDateTime() {
  const now = new Date();

  // Day, Date, Time
  const day = now.toLocaleDateString("en-US", { weekday: "long" });
  const date = now.toLocaleDateString("en-US");
  const time = now.toLocaleTimeString();

  // HTML element update
  const el = document.getElementById("time-date");
  if (el) {
    el.innerText = `${day}, ${date} - ${time}`;
  }
}

// প্রথমে কল
updateDateTime();

// প্রতি ১ সেকেন্ডে update
setInterval(updateDateTime, 1000);
