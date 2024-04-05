function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius").value;

    // Validate the input, ensuring the radius is a non-negative number
    const radius = parseFloat(radiusInput);
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the designated output field, rounded to four decimal places
    document.getElementById("volume").value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
