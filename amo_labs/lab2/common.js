function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = element.scrollHeight + "px";
}

function thisFileUpload() {
  document.getElementById("file").click();
}

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

function parseAfterSplit(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr = arr.filter((el) => isNumeric(el));
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = parseInt(arr[i]);
  }

  return arr;
}

window.onload = () => {
  /// random ///
  const randomButton = document.getElementById("random_button");
  const randomN = document.getElementById("random_n");
  const randomArr = document.getElementById("random_arr");
  const randomSorted = document.getElementById("random_sorted");
  const randomTime = document.getElementById("random_time");
  const compTime = document.getElementById("comp_time");
  const randomErr = document.getElementById("random_err");
  const randomRs = document.querySelector(".rd-rs-show");

  let arr = [];

  randomButton.addEventListener("click", () => {
    arr = [];
    const randomNVal = parseInt(randomN.value);
    if (isNaN(randomNVal)) {
      randomErr.innerHTML = "Wrong array size";
      randomErr.style.display = "block";
      randomRs.style.display = "none";
    } else {
      randomErr.style.display = "none";
      randomRs.style.display = "block";

      for (let i = 0; i < randomNVal; i++) {
        arr.push(getRandomInt(-99, 99));
      }

      randomArr.innerHTML = arr.join(" ");

      let sortTime = 0;
      function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left >= right) return;
        const pivot = arr[Math.floor((left + right) / 2)];
        const index = partition(arr, left, right, pivot);
        quickSort(arr, left, index - 1, sortTime);
        quickSort(arr, index, right, sortTime);
        return arr;
      }

      function partition(arr, left, right, pivot) {
        while (left <= right) {
          while (arr[left] < pivot && left <= right) {
            left++;
            sortTime += 1;
          }
          while (arr[right] > pivot) {
            right--;
            sortTime += 1;
          }
          if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
          }
        }
        return left;
      }

      quickSort(arr);
      randomSorted.innerHTML = arr.join(" ");
      randomTime.innerHTML = sortTime;
      compTime.innerHTML = Math.floor(randomNVal * Math.log(randomNVal));

      [randomArr, randomSorted, compTime, randomTime].forEach((el) => (el.style.color = "rgba(255, 255, 255, 0.8)"));
    }
  });

  /// random ///
  const manlButton = document.getElementById("manl_button");
  const manlN = document.getElementById("manl_n");
  const manlSorted = document.getElementById("manl_sorted");
  const manlTime = document.getElementById("manl_time");
  const manlCompTime = document.getElementById("manl_comp_time");
  const manlErr = document.getElementById("manl_err");
  const manlRs = document.querySelector(".manl-rs-show");

  let mlArr = [];

  manlButton.addEventListener("click", () => {
    mlArr = parseAfterSplit(manlN.value.split(" "));

    if (manlN.value == "" || mlArr.length == 0) {
      manlErr.innerHTML = "Array specified incorrectly";
      manlErr.style.display = "block";
      manlRs.style.display = "none";
    } else {
      manlErr.style.display = "none";
      manlRs.style.display = "block";

      let sortTime = 0;
      function quickSort(arr, left = 0, right = arr.length - 1) {
        if (left >= right) return;
        const pivot = arr[Math.floor((left + right) / 2)];
        const index = partition(arr, left, right, pivot);
        quickSort(arr, left, index - 1, sortTime);
        quickSort(arr, index, right, sortTime);
        return arr;
      }

      function partition(arr, left, right, pivot) {
        while (left <= right) {
          while (arr[left] < pivot && left <= right) {
            left++;
            sortTime += 1;
          }
          while (arr[right] > pivot) {
            right--;
            sortTime += 1;
          }
          if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
          }
        }
        return left;
      }

      quickSort(mlArr);
      manlSorted.innerHTML = mlArr.join(" ");
      manlTime.innerHTML = sortTime;
      manlCompTime.innerHTML = Math.floor(mlArr.length * Math.log(mlArr.length));

      [manlSorted, manlCompTime, manlTime].forEach((el) => (el.style.color = "rgba(255, 255, 255, 0.8)"));
    }
  });

  document.getElementById("file").addEventListener("change", function () {
    var fr = new FileReader();
    fr.onload = function () {
      let readText = fr.result;
      manlN.innerHTML = readText;
      auto_grow(manlN);
      mlArr = parseAfterSplit(readText.split(" "));

      if (readText == "" || mlArr.length == 0) {
        manlErr.innerHTML = "Array specified incorrectly";
        manlErr.style.display = "block";
        manlRs.style.display = "none";
      } else {
        manlErr.style.display = "none";
        manlRs.style.display = "block";

        let sortTime = 0;
        function quickSort(arr, left = 0, right = arr.length - 1) {
          if (left >= right) return;
          const pivot = arr[Math.floor((left + right) / 2)];
          const index = partition(arr, left, right, pivot);
          quickSort(arr, left, index - 1, sortTime);
          quickSort(arr, index, right, sortTime);
          return arr;
        }

        function partition(arr, left, right, pivot) {
          while (left <= right) {
            while (arr[left] < pivot && left <= right) {
              left++;
              sortTime += 1;
            }
            while (arr[right] > pivot) {
              right--;
              sortTime += 1;
            }
            if (left <= right) {
              [arr[left], arr[right]] = [arr[right], arr[left]];
              left++;
              right--;
            }
          }
          return left;
        }

        quickSort(mlArr);
        manlSorted.innerHTML = mlArr.join(" ");
        manlTime.innerHTML = sortTime;
        manlCompTime.innerHTML = Math.floor(mlArr.length * Math.log(mlArr.length));

        [manlSorted, manlCompTime, manlTime].forEach((el) => (el.style.color = "rgba(255, 255, 255, 0.8)"));
      }
    };
    fr.readAsText(this.files[0]);
  });
};
