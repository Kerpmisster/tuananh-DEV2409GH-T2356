function ChangeColor(){
    document.querySelectorAll('#zone3 h2')[0].style.color='Blue';
    return true;
}
// Biến theo dõi trạng thái màu sắc hiện tại
let isColored = false;

// Hàm để thay đổi màu sắc khi nhấn nút
function toggleColor() {
    const button = document.getElementById('colorButton');
    
    if (!isColored) {
        // Đổi màu khi nhấn lần đầu
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
    } else {
        // Trả về màu gốc khi nhấn lần thứ hai
        button.style.backgroundColor = '';
        button.style.color = '';
    }
    
    // Cập nhật trạng thái màu
    isColored = !isColored;
}

// Gán hàm sự kiện khi nhấn nút
document.getElementById('colorButton').addEventListener('click', toggleColor);