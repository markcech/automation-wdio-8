import { username, password } from "./fixtures.js";

async function openLoginPage() {
  await browser.reloadSession(), await browser.url("/prihlaseni");
}

async function login(username, password) {
  await $("#email").setValue(username);
  await $("#password").setValue(password);
  await $(".btn-primary").click();
}

async function goToApplications() {
  await $("=Přihlášky").click();
}

async function waitForTableToLoad() {
  await browser.pause(1000);
  await $("#DataTables_Table_0_processing").waitForDisplayed({ reverse: true });
}

async function getTableRows() {
  await waitForTableToLoad();
  return await $(".dataTable").$("tbody").$$("tr");
}

describe("Applications Page", async () => {
    
  beforeEach(async () => {
    await openLoginPage();
    await login(username, password);
    await goToApplications();
  });

  it("should list all applications", async () => {
    const rows = await getTableRows();

    for (const row of rows) {
      const rowText = await row.getText();
      console.log(rowText);
    }
  });

  // it('should list all applications', async () => {
  //     console.log('Page title is: ' + await $('h1').getText());

  //     const rows = await $('.dataTable').$('tbody').$$('tr');
  //     console.log('There are ' + rows.length + ' rows in the table');
  //     for (const row of rows) {
  //         const rowText = await row.getText()
  //         console.log(rowText);
  //     }
  // });

  //     it('should filter in applications', async () => {
  //         const searchInput = $('input[type="search"]');
  //         const loading = $('#DataTables_Table_0_processing');
  //         const searchText = 'mar';

  //         await searchInput.setValue(searchText);
  //         await browser.pause(1000);
  //         await loading.waitForDisplayed({ reverse: true });

  //         const filteredRows = await $('.dataTable').$('tbody').$$('tr')
  //         console.log('There are ' + filteredRows.length + ' filtered rows in the table');
  //         for (const row of filteredRows) {
  //             console.log(await row.getText());
  //         }
  //     });
});
