let showSuiteTag;

(() => {
    const $$ = jQuery.noConflict();
    const width = $$(window).width();
    const deviceIsMobile = $$(window).width() <= 768;
    const deviceIsNotMobile = $$(window).width() > 768;

    // Menu - manipula para abri-lo ou fechá-lo
    $$('.open-menu').click(() => {
        $$('.header-overlay').fadeIn();
    });
    $$('.header-overlay').click(function (event) {
        const target = $$(event.target);
        if (
            target.hasClass('header-overlay') ||
            target.hasClass('nav-links-overlay') ||
            target.hasClass('close-btn') ||
            target.hasClass('fa-xmark')
        ) {
            $$(this).fadeOut();
        };
    });
    // ---

    // Banner / slider - home
    const bannerSliderOptions = {
        cellAlign: 'left',
        contain: true,
        autoPlay: 4000,
        wrapAround: true,
        // draggable: false,
        prevNextButtons: false,
    };
    const bannerAmount = $$('.banner-slider-cell').length;
    if (bannerAmount <= 1) {
        bannerSliderOptions.prevNextButtons = false;
        bannerSliderOptions.pageDots = false;
    }
    $$('.banner-slider').flickity(bannerSliderOptions);
    // ---

    // Suites slider - home
    $$('.suites-slider').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        draggable: false,
    });
    // ---

    // Gastro slider - home
    const gastroAndVantagensSliderOptions = {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        draggable: false,
    };
    if (width <= 768) {
        gastroAndVantagensSliderOptions.draggable = true;
    }
    $$('.gastro-home .gastro-slider').flickity(gastroAndVantagensSliderOptions);
    // ---

    // Vantagens slider - home
    $$('.vantagens-home-slider').flickity(gastroAndVantagensSliderOptions);
    // ---
    
    // Manipula descrição da suíte
    if (width <= 768) {
        const suitDescription = $$('.suite-description');
        const suitDescriptionHTML = suitDescription.html();
        const description = suitDescription.text().trim();
        const descriptionSize = description.split('').length;
        const showMoreLessBtn = $$('.show-more-less');
        let shortDescription = null;
        let shortDescriptionIsVisible = false;
        if (descriptionSize > 200) {
            shortDescription = description.substring(0, 200);
            suitDescription.text(shortDescription);
            showMoreLessBtn.removeClass('d-none');
        };
        showMoreLessBtn.click(function() {
            if (!shortDescriptionIsVisible) {
                suitDescription.html(suitDescriptionHTML)
            } else {
                suitDescription.text(shortDescription);
            };
            shortDescriptionIsVisible = !shortDescriptionIsVisible;
            $$(this).find('.more').toggleClass('d-none');
            $$(this).find('.less').toggleClass('d-none');
        });
    };
    // ---

    // Suite slider - inner - featured
    $$('.suites-featured-slider').flickity({
        cellAlign: 'left',
        contain: true,
        autoPlay: 4000,
        wrapAround: true,
    });
    // ---

    // Na suíte, alterna entre widget de reservas e calendário
    const scheduledButtons = $$('.programadas-btns button');
    const scheduledContents = $$('.suite-inner-widget, .suite-inner-calendar');

    scheduledButtons.on('click', event => {
        const clickedButton = $$(event.currentTarget);

        if (!clickedButton.hasClass('active')) {
            scheduledButtons.removeClass('active');
            scheduledContents.addClass('d-none');
            clickedButton.addClass('active');
            scheduledContents.eq(clickedButton.index()).removeClass('d-none');
        }
    });
    // ---

    // Alterna o texto para o singular
    // se o nome da suíte conter a palavra "suíte" no singular
    const suiteNameIsSingular = $$('.suite-inner-programadas h1')
        .text().toLowerCase().match(/suíte\s/); // /suíte\s/ === suíte + 1 espaço
    if (suiteNameIsSingular) {
        $$('[plural]').toggleClass('d-none');
        $$('[singular]').toggleClass('d-none');
    };
    // ---

    // Adiciona selo às suítes selecionadas
    function handleSuiteTag(configs) {
        configs.forEach(config => {
            const [suite, tag] = config;
            $$('.suites-page-card').each(function() {
                const suiteName = $$(this).find('h5').text().toLowerCase().trim();
                if (suiteName === suite.toLowerCase()) {
                    $$(this).prepend(
                        $$(`<img src="assets/img/selos/${tag.toLowerCase().trim()}.jpg" class="suite-tag-img" alt="tag">`)
                    );
                };
            });
        });
    };
    showSuiteTag = handleSuiteTag;
    // ---

    // Na aba "Vantagens" mostra ou esconde o card de uma vantagem
    $$('.vantagens-grid-item img').click(function () {
        $$(this).siblings('.vantagens-overlay').fadeIn();
    });
    $$('.vantagens-overlay').click(function (event) {
        const target = $$(event.target);
        if (target.hasClass('vantagens-overlay') || target.is('span, i')) {
            $$(this).fadeOut();
        }
    });
    // ---

    // Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---

})()




// Na home mostra ou esconde o card de uma vantagem
$$('.vantagens-home-slider-cell').click(function () {
    const index = $$(this).index();
    $$('.vantagens-overlay').eq(index).fadeIn();
});
// ---





















// Na home mostra ou esconde o card de uma vantagem
$$('.vantagens-home-slider-cell').click(function () {
    const index = $$(this).index();
    $$('.vantagens-overlay').eq(index).fadeIn();
});
// ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---// Na home mostra ou esconde o card de uma vantagem
    $$('.vantagens-home-slider-cell').click(function () {
        const index = $$(this).index();
        $$('.vantagens-overlay').eq(index).fadeIn();
    });
    // ---