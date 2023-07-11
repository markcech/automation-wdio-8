describe("Objednávka pro MŠ/SŠ", async () => {
  
  it("otevření navigačního menu", async () => {
    await browser.reloadSession();
    await browser.url('/');

    const proUcitele = $('=Pro učitelé');
    await proUcitele.click();

    const objednavka = $('=Objednávka pro MŠ/ZŠ')
    await objednavka.click();
    
    await browser.pause(2000);              


  });
});