$(document).ready(function() {
    $(window).on('load', function(event) {


        //AJAX call for top news in carousel

        $.ajax({
            //method for the HTTP request e.g. GET, POST, ..
            method: 'GET',
            //url is the place where the data lives
            url: `https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=5724121951714814964cebf967657080`,
            //the format of data you want to get back
            dataType: 'json',
            //stuff that happens if I get the data I want back
            success: function(data) {
                // console.log(data);
                var articles = data.articles
                // console.log(articles);

                for (var i = 0; i < articles.length; i++) {
                    var source = articles[i]
                    var imageP = source.urlToImage
                    var description = source.description
                    var links=source.url
                    console.log(links);
                    // console.log(imageP)
                    //console.log(description);
                    // add this '<p>' + description +'</p>'
                    if (i === 0) {
                        $('#pic1').append('<a href="'+links+'"><img style=height:125%; width=65%; src=' + imageP + '>');
                        $('#caption1').append('<p>' + description + '</p>');
                    } else if (i === 2) {
                        $('#pic2').append('<a href="'+links+'"><img style=height:125%; width=65%; src=' + imageP + '>');
                        $('#caption2').append('<p>' + description + '</p>');
                    } else if (i === 4) {
                        $('#pic3').append('<a href="'+links+'"><img style=height:125%; width=65%; src=' + imageP + '>');
                        $('#caption3').append('<p>' + description + '</p>');
                    } else if (i > 4) {
                        break;
                    }

                }
            }

        })
        //AJAX call for celeb news

        $.ajax({
            //method for the HTTP request e.g. GET, POST, ..
            method: 'GET',
            //url is the place where the data lives
            url: `https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=5724121951714814964cebf967657080`,
            //the format of data you want to get back
            dataType: 'json',
            //stuff that happens if I get the data I want back
            success: function(data) {
                // console.log(data);
                var articles = data.articles
                // console.log(articles);

                for (var i = 0; i < articles.length; i++) {
                    var source = articles[i]
                    var imageP = source.urlToImage
                    var title = source.title
                    var links=source.url
                    console.log(links);
                    // console.log(imageP)
                    //console.log(title);
                    // add this '<p>' + description +'</p>'
                    if (i === 0) {
                        $('#pic4').append('<a href="'+links+'"><img  style=height:100%; src=' + imageP + '><p class="description">' + title + '</p>');
                        // $('#pic4').append('<p class="description">' + title + '</p>')
                        // $('#pic4').append('<p class="description">' + title +'</p>')
                    } else if (i === 2) {
                        $('#pic5').append('<a href="'+links+'"><img  style=height:100%; src=' + imageP + '><p class="description">' + title + '</p>');
                        // $('#pic5').append('<p class="description">' + title + '</p>')

                    } else if (i === 4) {
                        $('#pic6').append('<a href="'+links+'"><img  style=height:100%; src=' + imageP + '><p class="description">' + title + '</p>');
                        // $('#pic6').append('<p class="description">' + title + '</p>')
                    } else if (i > 4) {
                        break;
                    }

                }
            }

        })
        //AJAX call for Buzzfeed
        $.ajax({
            //method for the HTTP request e.g. GET, POST, ..
            method: 'GET',
            //url is the place where the data lives
            url: `https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=5724121951714814964cebf967657080`,
            // url: `https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=5724121951714814964cebf967657080`,
            //the format of data you want to get back
            dataType: 'json',
            //stuff that happens if I get the data I want back
            success: function(data) {
                // console.log(data);
                var articles = data.articles
                // console.log(articles);

                for (var i = 0; i < articles.length; i++) {
                    var source = articles[i]
                    var imageP = source.urlToImage
                    var title = source.title
                    var links=source.url
                    var description = source.description
                    console.log(links);
                    // console.log(imageP)
                    // console.log(title);
                    // add this '<p>' + description +'</p>'
                    if (i === 0) {

                        $('#pic7').append('<a href="'+links+'"><img  style=height:100%; src=' + imageP + '><p class="description2">' + description + '</p>');
                        // $('#pic7').append("<a href=links>")

                    } else if (i === 2) {
                        $('#pic8').append('<a href="'+links+'"><img  style=height:100%; src=' + imageP + '><p class="description2">' + description + '</p>');

                    } else if (i === 4) {
                        $('#pic9').append('<a href="'+links+'"><img  style=height:100%; src=' + imageP + '><p class="description2">' + description + '</p>');


                    } else if (i > 4) {
                        break;
                    }
                }
            }

        })

        $("#bam").dblclick(function() {
            $.ajax({
                //method for the HTTP request e.g. GET, POST, ..
                method: 'POST',
                //url is the place where the data lives
                url: `https://cryptic-forest-61896.herokuapp.com`,
                data: {message: 'Come Get Me'},
                //the format of data you want to get back
                //dataType: 'json',
                //stuff that happens if I get the data I want back
                success: function() {
                    console.log('good job')
                },
                error: function() {
                    console.log('error');
                }

            })

        });


    // });

    })

});
