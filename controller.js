function updateView() {
    const side = model.currentPage;
    if (side == 'loginPage') loginPage();
    if (side == 'adminPage') adminPage();
    if (side == 'disclaimer') disclaimer();
    if (side == 'survey1') survey1();
    if (side == 'thankYouPage') thankYouPage();
    
}   