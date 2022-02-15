function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

window.onload = () => {
  /// TASK 1 ///
  const task1_button = document.getElementById("task1_button");
  const task1_a = document.getElementById("task1_a");
  const task1_b = document.getElementById("task1_b");
  const task1_c = document.getElementById("task1_c");
  const task1_err = document.getElementById("task1_err");
  const task1_resl_block = document.getElementById("task1_resl");
  const task1_resl = document.querySelector("#task1_resl span");
  let task1_result;

  task1_button.addEventListener("click", () => {
    const task1_a_val = parseFloat(task1_a.value);
    const task1_b_val = parseFloat(task1_b.value);
    const task1_c_val = parseFloat(task1_c.value);
    task1_resl_block.style.display = "none";
    task1_err.style.display = "none";

    if (task1_a_val !== "" && task1_b_val !== "" && task1_c_val !== "") {
      if (task1_b_val == 0) {
        task1_err.innerHTML = "Division by Zero";
        task1_err.style.display = "block";
      } else {
        task1_result = Math.pow(task1_a_val / task1_b_val, 3) + Math.pow(task1_c_val / 2, 2);

        task1_resl.innerHTML = task1_result;
        task1_resl_block.style.display = "block";
      }
    }
  });

  /// TASK 2 ///
  const task2_button = document.getElementById("task2_button");
  const t2_a = document.getElementById("task2_a");
  const t2_b = document.getElementById("task2_b");
  const t2_c = document.getElementById("task2_c");
  const t2_d = document.getElementById("task2_d");
  const task2_err = document.getElementById("task2_err");
  const task2_resl_block = document.getElementById("task2_resl");
  const task2_resl = document.querySelector("#task2_resl span");
  let task2_result;

  task2_button.addEventListener("click", () => {
    const t2_a_val = parseFloat(t2_a.value);
    const t2_b_val = parseFloat(t2_b.value);
    const t2_c_val = parseFloat(t2_c.value);
    const t2_d_val = parseFloat(t2_d.value);
    task2_err.style.display = "none";
    task2_resl_block.style.display = "none";

    if (t2_a_val !== "" && t2_b_val !== "" && t2_c_val !== "" && t2_d_val !== "") {
      if (t2_b_val > 4 && t2_c_val > 4 && t2_d_val > 4) {
        task2_result =
          t2_a_val / t2_b_val + (t2_a_val * t2_b_val) / t2_c_val + (t2_a_val * t2_b_val * t2_c_val) / t2_d_val;

        task2_resl.innerHTML = task2_result;
        task2_resl_block.style.display = "block";
      } else if (t2_b_val <= 4) {
        if (t2_a_val != 0 && t2_b_val != 0 && t2_c_val != 0) {
          task2_result = t2_b_val / t2_a_val + t2_c_val + t2_d_val * t2_b_val;

          task2_resl.innerHTML = task2_result;
          task2_resl_block.style.display = "block";
        } else {
          task2_err.innerHTML = "Division by Zero";
          task2_err.style.display = "block";
        }
      } else if (t2_c_val <= 4) {
        if (t2_a_val != 0 && t2_b_val != 0 && t2_c_val != 0) {
          task2_result = t2_b_val / t2_c_val + t2_a_val + t2_d_val * t2_b_val;

          task2_resl.innerHTML = task2_result;
          task2_resl_block.style.display = "block";
        } else {
          task2_err.innerHTML = "Division by Zero";
          task2_err.style.display = "block";
        }
      } else {
        task2_err.innerHTML = "Empty set";
        task2_err.style.display = "block";
      }
    }
  });

  /// TASK 2 ///
  const task3_button = document.getElementById("task3_button");
  const t3_n = document.getElementById("task3_n");
  const t3_a = document.getElementById("task3_a");
  const t3_b = document.getElementById("task3_b");
  const t3_c = document.getElementById("task3_c");
  const t3_d = document.getElementById("task3_d");
  const task3_resl_block = document.getElementById("task3_resl");
  const task3_resl = document.querySelector("#task3_resl span");

  task3_button.addEventListener("click", () => {
    const t3_n_val = parseInt(t3_n.value);
    task3_resl_block.style.display = "none";
    let task3_result = 0;
    let t3_a_vs = [];
    let t3_b_vs = [];
    let t3_c_vs = [];
    let t3_d_vs = [];

    if (t3_n_val !== "" && t3_n_val >= 1) {
      for (let i = 0; i < t3_n_val; i++) {
        t3_a_vs.push(getRandomInt(1, 99));
        t3_b_vs.push(getRandomInt(1, 99));
        t3_c_vs.push(getRandomInt(1, 99));
        t3_d_vs.push(getRandomInt(1, 99));
      }

      t3_a.innerHTML = t3_a_vs.join(", ");
      t3_b.innerHTML = t3_b_vs.join(", ");
      t3_c.innerHTML = t3_c_vs.join(", ");
      t3_d.innerHTML = t3_d_vs.join(", ");
      t3_a.style.color = "rgba(255, 255, 255, 0.6)";
      t3_b.style.color = "rgba(255, 255, 255, 0.6)";
      t3_c.style.color = "rgba(255, 255, 255, 0.6)";
      t3_d.style.color = "rgba(255, 255, 255, 0.6)";

      for (let i = 0; i < t3_n_val; i++) {
        task3_result += Math.sqrt(t3_d_vs[i] + Math.sqrt(t3_c_vs[i] + Math.sqrt(t3_a_vs[i] + t3_b_vs[i])));
      }

      task3_resl.innerHTML = task3_result;
      task3_resl_block.style.display = "block";
    }
  });
};
