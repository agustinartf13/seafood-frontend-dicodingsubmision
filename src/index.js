import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import $ from "jquery";
import "./style/main.css";
import './components/nav-bar.js';
import './components/banner-food.js';
import './components/food-list.js';
import './components/food-item.js';
import './components/food-detail.js';
import './components/foo-ter.js';


$(document).ready(function() {

    var description = $('#description');
    description.text(description.text().substr(0, 10))

    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood',
        method: "GET",
        success: function (data) {
                const foodList = $('#food-list');
                data.meals.forEach(food => {
                const foodElement = document.createElement('food-item');
                foodElement.food = food;
                foodList.append(foodElement);
            });
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
            console.log(status);
            console.log(error);
        }
    })
});


$(document).on('click', '.btn-food', function () {
    const foodId = $(this).attr('id');
    // console.log(foodId);
    $.ajax({
        url: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`, 
        method: "GET",
        success: function(data) {
            console.log(data)
            console.log(data)
            const fDetail = document.createElement('food-detail');
            fDetail.DetailFood = data.meals[0];

            $('.detail').html("");
            $('.detail').append(fDetail);
            $('#foodDetail').modal("show");
        }, 
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
            console.log(status);
            console.log(error);
        }
    })
    
});
