import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteForIncompleteList = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

const createIncompleteList = (text) => {
  //li
  const li = document.createElement("li");

  //div
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ子要素にdivを追加
  li.appendChild(div);
  //list要素
  const toDo = document.createElement("p");
  toDo.innerText = text;
  div.appendChild(toDo);

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  div.appendChild(completeButton);

  //追加された要素には追加したタイミング以降でイベントを付与する必要あり
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode.parentNode;
    deleteForIncompleteList(addTarget);

    const compToDoText =
      addTarget.firstElementChild.firstElementChild.innerText;

    //addTarget.textContent = null;

    //押された削除ボタンの親タグを削除

    //li
    const li = document.createElement("li");

    //div
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ子要素にdivを追加
    li.appendChild(div);
    //list要素
    const compToDo = document.createElement("p");
    compToDo.innerText = compToDoText;
    div.appendChild(compToDo);

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(backButton);

    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  div.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグを削除
    deleteForIncompleteList(deleteButton.parentNode.parentNode);
  });
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// document
//   .getElementById("complete-button")
//   .addEventListener("click", () =>
//     deleteForIncompleteList(
//       document.getElementById("complete-button").parentNode.parentNode
//     )
//   );
