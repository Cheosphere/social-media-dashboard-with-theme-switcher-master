const body = document.getElementById('body')
const title = document.getElementById('title')
const bottomTitle = document.getElementById('bottom_title')
const headerBorder = document.getElementById('header_border')
const toggleSwitch = document.getElementById('switch')
const header = document.getElementById('header')
const cards = document.querySelectorAll('.card')
const bottomCards = document.querySelectorAll('.bottom_card')
const followersNumber = document.querySelectorAll('.card_followers_number')
const footerValue = document.querySelectorAll('.bottom_card_footer_value')

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark_body')
    header.classList.toggle('dark_header')
    title.classList.toggle('dark_title')
    bottomTitle.classList.toggle('dark_bottom_title')
    headerBorder.classList.toggle('dark_border')

    cards.forEach(card => {
        card.classList.toggle('dark_card')
    })

    bottomCards.forEach(card => {
        card.classList.toggle('dark_card')
    })

    followersNumber.forEach(number => {
        number.classList.toggle('dark_title')
    })

    footerValue.forEach(value => {
        value.classList.toggle('dark_title')
    })
})

anime({ targets: '.card1', innerHTML: [0, 1987], easing: 'linear', round: 1 });
anime({ targets: '.card2', innerHTML: [0, 1044], easing: 'linear', round: 1 });
anime({ targets: '.card3', innerHTML: [0, '11k'], easing: 'linear', round: 1 });
anime({ targets: '.card4', innerHTML: [0, 8239], easing: 'linear', round: 1 });
anime({ targets: '.b_card1', innerHTML: [0, 87], easing: 'linear', round: 1 });
anime({ targets: '.b_card2', innerHTML: [0, 52], easing: 'linear', round: 1 });
anime({ targets: '.b_card3', innerHTML: [0, 5462], easing: 'linear', round: 1 });
anime({ targets: '.b_card4', innerHTML: [0, '52k'], easing: 'linear', round: 1 });
anime({ targets: '.b_card5', innerHTML: [0, 117], easing: 'linear', round: 1 });
anime({ targets: '.b_card6', innerHTML: [0, 507], easing: 'linear', round: 1 });
anime({ targets: '.b_card7', innerHTML: [0, 107], easing: 'linear', round: 1 });
anime({ targets: '.b_card8', innerHTML: [0, 1407], easing: 'linear', round: 1 });

anime({
    targets: '.card_footer, .bottom_card_footer_percent',
    opacity: [0, 1],
    translateY: [25, 0],
    duration: 2000
});

anime({
    targets: '.bottom_card_header, .card_logo',
    opacity: [0, 1],
    translateY: [-25, 0],
    duration: 2000
});