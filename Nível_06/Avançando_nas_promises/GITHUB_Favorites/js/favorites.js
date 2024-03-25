// Classe contendo a lógica dos dados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = [
      {
        login: "assisfaavf",
        name: "assis",
        public_repos: "4",
        followers: "0",
      },
      {
        login: "maykbrito",
        name: "Mayk Brito",
        public_repos: "76",
        followers: "120000",
      },
    ];
  }

  delete(user) {
    const filteredEntries = this.entries.filter((entry) => {
      entry.login != user.login;
    });
  }
}

// Classe que cria a vizualização e eventos do html

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`;
      row.querySelector(".user img").alt = `Imagem de ${user.name}`;
      row.querySelector(".user p").textContent = user.name;
      row.querySelector(".user span").textContent = user.login;
      row.querySelector(".repositories").textContent = user.public_repos;
      row.querySelector(".followers").textContent = user.followers;

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm("Tem certeza que deseja deletar essa linha ?");

        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td class="user">
    <img
    src="https://github.com/assisfaavf.png"
    alt="imagem de assis"
    />
    <a target="_blank" href="https://github.com/assisfaavf"
    ><p>assis</p>
    <span>assisfaavf</span></a
    >
    </td>
    <td class="repositories">4</td>
    <td class="followers">0</td>
    <td><button class="remove">&times;</button></td>
    `;

    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tbody tr").forEach((tr) => {
      tr.remove();
    });
  }
}
