$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "credly.xml",
        dataType: "xml",
        success: function (xml) {
            $(xml).find('credential').each(function () {
                var title = $(this).find('title').text();
                var image = $(this).find('image').text();
                var link = $(this).find('link').text();

                var activeClass = $(this).index() === 0 ? 'active' : '';

                var slide = `
                    <div class="carousel-item ${activeClass}">
                        <center> <img src="${image}" class="d-block h-50" alt="${title}"> </center>
                        <br>
                        <br>
                        <br>
                        <div class="carousel-caption d-none d-md-block">
                            <a href="${link}" class="btn btn-primary" target="_blank">View Credential</a>
                        </div>
                    </div>
                `;

                $('.carousel-indicators').append(`<li data-target="#carouselCredentials" data-slide-to="${$(this).index()}" class="${activeClass}"></li>`);
                $('.carousel-inner').append(slide);
                console.log("This is a message from script.js");
            });
        }
    });
});
