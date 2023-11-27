test('locator syntax rules', async ({page})=> {
    //by Tag Name
    await page.locator('input').first().fill("hola")
    //by ID
    page.locator('#user-name')

    //by Class value
    page.locator('.input_error')

    //by Attribute -placeholder
    page.locator('[placeholder="Username"]')

    //by by class value(full)
    page.locator('[class="input_error form_input"]')

    //Combine different selectors
    page.locator('input[placeholder="Username"].input_error')

    //by XPATH (NOT RECOMMENDED)
    page.locator('//*[@id="user-name"]')

    //by partial text match
    page.locator(':text("User")')

    //by exact text match
    page.locator(':text("Username")')

    // 
})

test('User facing locators', async ({page})=>{
  await page.getByRole('textbox', {name: "Username"})
  await page.getByRole('textbox', {name: "Username"})
})