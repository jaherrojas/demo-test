import { test, expect } from '@playwright/test';

let pagina = 'https://rodrigovillanueva.com.mx/'

async function scrollPageDown(page) {
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });
}

async function waitFor(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

test.beforeEach(async({ page }) =>{
  
  await page.goto(pagina); 
  await page.setViewportSize( {width: 1920, height: 1080});
  
})

// test('locator syntax rules', async ({page})=> {

//   await waitFor(2000);
//   await page.locator(':text("Prácticas")').first().hover(); //PONER EL CURSOR EN UN MENU DESPLEGABLE.
//   await page.getByRole('link', { name: 'Formulario Aplicación' }).click();
//   await page.getByRole('textbox',{name: 'Name'}).fill('Jaher Manrique');
//   await page.getByRole('textbox',{name: 'Email'}).fill('quienSoy@gmail.com');
//   await page.getByRole('textbox',{name: 'Phone'}).fill('3115468795');
//   //await scrollPageDown(page);
//   await waitFor(2000);
//   await page.locator('#edit-contact-address').fill('carrera 9 #104-106');
//   await page.locator('#edit-contact-address-2').fill('NO SE MAS')
//   await page.getByRole('textbox',{name: 'City'}).fill('Ibague')
//   await page.getByRole('combobox',{name: 'state'}).click();

// })


//CHILD ELEMENTS 

test('locator syntax rules', async ({page})=> {

      await waitFor(2000);
      
      await page.locator(':text("Prácticas")').first().hover(); //PONER EL CURSOR EN UN MENU DESPLEGABLE.
      await page.getByText('Formulario Avanzado Uno').click()
      await page.locator('tbody tr input[value="1"]').nth(2).click()   // NTH es para indicar cual checkbox seleccionaras.
      
      //all txt values
      const radiosOther = await page.locator('span').allTextContents()
      expect(radiosOther).toContain('Radios other')
     
      //***.FILTER una forma de encontrar el objeto mas facilmente si este SE ENCUENTRA con muchas similitudes. // PARENT ELEMENTS

})