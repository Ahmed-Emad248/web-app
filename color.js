// color.js
const branchColors = {
    pre_prod: 'black',
    development: 'green',
    stg: 'blue',
    hotfix: 'red'
};

const branchName = window.location.hash.substr(1) || 'master';
const colorText = document.getElementById('color-text');
colorText.textContent = `Hello from branch ${branchName}`;
colorText.style.color = branchColors[branchName] || 'black';
