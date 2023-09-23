import {
  db,
  ref,
  get,
  set,
  generateId,
  query,
  orderByChild,
  equalTo,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  app,
  getAuth,
} from "./database/firebase.js";
const UserInputName = document.querySelector("input[type='text']");
const UserInputPassword = document.querySelector("input[type='password']");
const UserInputEmail = document.querySelector("input[type='email']");
const ButtonLogin = document.querySelector("button#LoginButton");
UserInputName.oninput = () => {
  if (
    UserInputName.value.length >= 5 &&
    UserInputPassword.value.length > 5 &&
    UserInputPassword.value.length < 14
  ) {
    ButtonLogin.disabled = false;
  } else {
    ButtonLogin.disabled = true;
  }
};
document.addEventListener("keypress", (e) => {
  if (e.key == "Enter" && ButtonLogin.disabled == false) {
    createUser();
  }
});
UserInputName.addEventListener("focusout", () => {
  if (UserInputName.value.length >= 5) {
    UserInputName.style.borderColor = "#67af56";
  } else {
    UserInputName.style.borderColor = "#e75331";
  }
});
UserInputPassword.addEventListener("focusout", () => {
  if (
    UserInputPassword.value.length > 5 &&
    UserInputPassword.value.length < 14
  ) {
    UserInputPassword.style.borderColor = "#67af56";
  } else {
    UserInputPassword.style.borderColor = "#e75331";
  }
});
UserInputPassword.oninput = () => {
  if (
    UserInputName.value.length >= 5 &&
    UserInputPassword.value.length > 5 &&
    UserInputPassword.value.length < 14
  ) {
    ButtonLogin.disabled = false;
  } else {
    ButtonLogin.disabled = true;
  }
};
ButtonLogin.onclick = () => {
  createUser();
};
// Função para remover "@" e converter para minúsculas
function cleanEmail(email) {
  return email.toLowerCase().replace(/[@.]/g, "_");
}

// Em createUser(), você precisa esperar pela resolução da promessa retornada por generateId()
async function createUser() {
  // Obtenha os valores do formulário
  const email = UserInputEmail.value; // Certifique-se de obter o email corretamente

  const usersRef = ref(db, "users");
  const QueryByEmail = query(
    usersRef,
    orderByChild("email"),
    equalTo(email) // Use a variável 'email' aqui
  );

  try {
    const emailSnapshot = await get(QueryByEmail);

    if (emailSnapshot.exists()) {
      // Usuário encontrado pelo email
      console.log("Usuário não encontrado.");
    } else {
      const NewId = await generateId(); // Certifique-se de implementar a função generateId()
      console.log(NewId);
      const userRef = ref(db, "users/" + NewId);
      await set(userRef, {
        id: NewId,
        email: cleanEmail(email), // Use a variável 'email' aqui
        name: UserInputName.value,
        password: UserInputPassword.value,
        isShiny: false,
        favouritePokemon: "bulbasaur",
        favouriteColor: "water",
        editorColors: ["black", "gray", "white", "pink"],
        pokecard: {
          pokecard: {
            borderRadiusTopLeft: "0px",
            borderRadiusTopRight: "0px",
            borderRadiusBottomRight: "0px",
            borderRadiusBottomLeft: "0px",
            clipPath: "none",
            filter: "none",
            transform: "none",
          },
        },
      });

      localStorage.setItem("activeUser", true);
      localStorage.setItem("UserId", NewId);
      // Redirecione o usuário após o registro bem-sucedido
      window.location.href = "index.html";
    }
  } catch (error) {
    console.error("Erro ao criar o usuário ou verificar o email:", error);
  }
}
