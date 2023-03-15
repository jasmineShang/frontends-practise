import $ from 'jquery'
import './css/index.css'
import './css/index1.less'
import logo from './images/logo.jpg'

$('.box').attr('src', logo)

$(function () {
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')
})
