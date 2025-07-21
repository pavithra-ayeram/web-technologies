function checkArmstrong() {
    const num = document.getElementById("numberInput").value;
    const digits = num.split('').map(Number);
    const power = digits.length;

    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0);

    const resultText = (sum == num) 
      ? `${num} is an Armstrong number!` 
      : `${num} is not an Armstrong number.`;

    document.getElementById("result").innerText = resultText;
}