it('Cookies - Should', function () {
  cy.visit('https://tqm-main-web-qa.tqm-app-beta.com/car-insurance/all');

  cy.get('[data-testid="carInsureLevel1"]').eq(0).click(); //Select Level 1

  cy.get('[data-testid="carYearSelect"]').should('be.visible');
  cy.get('[data-testid="carYearSelect"]').click().wait(1000); // ปีรถยนต์
  cy.get('[data-testid="carYearValue2020"]').should('exist');
  cy.get('[data-testid="carYearValue2020"]').click().wait(2500); //Select ปีรถยนต์

  cy.get('[data-testid="carBrandSelect"]').should('be.visible').wait(500);
  cy.get('[data-testid="carBrandSelect"]').click(); // ยี่ห้อรถยนต์
  cy.get('[data-testid=carBrandValueTOYO]').should('exist'); //Select ยี่ห้อรถยนต์
  cy.get('[data-testid="carBrandValueTOYO"]').eq(0).click().wait(2500); //Select ยี่ห้อรถยนต์

  cy.get('[data-testid="carModelSelect"]').should('be.visible');
  cy.get('[data-testid="carModelSelect"]').click(); //รุ่นรถยนต์
  cy.get('[data-testid="carModelValueVIOS"]').should('exist'); //Select รุ่นรถยนต์
  cy.get('[data-testid="carModelValueVIOS"]').click().wait(2500); //Select รุ่นรถยนต์

  cy.get('[data-testid="carSubModelSelect"]').should('be.visible');
  cy.get('[data-testid="carSubModelSelect"]').click(); //รุ่นย่อย
  cy.get('[data-testid="carSubModelValueTOYO20AI"]').should('exist'); // Select รุ่นย่อย
  cy.get('[data-testid="carSubModelValueTOYO20AI"]').click(); // Select รุ่นย่อย

  cy.get('[data-testid="customerFirstNameInput"]').type('TQM');
  cy.get('[data-testid="customerLastNameInput"]').type('ดูแลคุณทุกช่วงเวลา');
  cy.get('[data-testid="customerPhoneNoInput"]').type('0999999999');

  cy.get('[data-testid="nextStepButton"]').click();
  cy.get('[data-testid="acceptPrivacyCheckbox"]').click(); // Click ข้าพเจ้าได้อ่านข้อกำหนดและเงื่อนไข
  cy.get('[data-testid="agreeConsentButton"]').click(); // Click ขอความยินยอมในการใช้ข้อมูลของท่าน
  cy.get('[data-testid="acceptCookieButton"]').click(); // รับทราบ Cookie

  cy.getCookie('allow_cookie').should('have.property', 'value', 'Y');
  cy.getCookie('consented').should('have.property', 'value', 'true');
  cy.getCookie('ssid').should('have.property', 'value');
});
