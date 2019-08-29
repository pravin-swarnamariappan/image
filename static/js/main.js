$(document).ready(async function () {
    
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    let net;
    let isModelLoaded = false;

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr("src", e.target.result).hide().fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {

        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('').hide();
        readURL(this);
    });

    // Showing all possible results
    function showResults(result) {
        $('.loader').hide();
        $('#result').fadeIn(600).text(result[0].className + '  -   ' + result[0].probability.toFixed(3));
    }

    // Predict
    $('#btn-predict').click(async function () {

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Load the model.
        if (isModelLoaded) {
            console.log('Previously loaded');
        } else {
            $('#result').show().fadeIn(600).text('MobileNet model is loading, please wait..');
            net = await mobilenet.load();
            console.log('Model loaded');
            isModelLoaded = true;
        }

        // Make a prediction through the model on our image.
        const imgEl = document.getElementById('imagePreview');
        const result = await net.classify(imgEl);

        showResults(result);
    });

});