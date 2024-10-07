function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// Định nghĩa tập dữ liệu students nếu chưa có trong localStorage
if (!localStorage.getItem('students')) {
  const students = [
      {studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan"},
      {studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền"},
      {studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng"},
      {studentId: "SV004", studentName: "Nguyễn Văn D", age: 19, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng"},
  ];

  // Lưu dữ liệu vào localStorage
  localStorage.setItem('students', JSON.stringify(students));
}

// Sử dụng jQuery để lấy dữ liệu từ localStorage và hiển thị ra bảng
$(document).ready(function() {
  // Lấy dữ liệu từ localStorage
  const students = JSON.parse(localStorage.getItem('students'));

  // Kiểm tra nếu dữ liệu tồn tại
  if (students && students.length > 0) {
      // Lặp qua từng sinh viên và chèn vào bảng
      students.forEach(function(student,index) {
          const sexDisplay = student.sex ? "Nam" : "Nữ"; // Chuyển đổi giới tính thành chữ
          const row = `
              <tr>
                  <td>${index + 1}</td>
                  <td>${student.studentId}</td>
                  <td>${student.studentName}</td>
                  <td>${student.age}</td>
                  <td>${sexDisplay}</td>
                  <td>
                      <button class="btn btn-danger btn-view" data-index="${index}" onclick="myFunction()">Xem</button>
                      <button class="btn btn-warning text-light">Sửa</button>
                      <button class="btn btn-success btn-delete" data-index="${index}">Xóa</button>
                  </td>
              </tr>
          `;
          // Thêm hàng vào bảng
          $('#studentTableBody').append(row);
      });
      $('.btn-view').on('click', function() {
        const studentIndex = $(this).data('index');
        const student = students[studentIndex];

        // Hiển thị thông tin sinh viên vào form
        $('#studentId').val(student.studentId);
        $('#studentName').val(student.studentName);
        $('#age').val(student.age);
        $('#sex').val(student.sex ? "Nam" : "Nữ");
        $('#birthDate').val(student.birthDate);
        $('#birthPlace').val(student.birthPlace);
        $('#address').val(student.address);
    });
    $('.btn-delete').on('click', function() {
      const studentIndex = $(this).data('index');
      const updatedStudents = students.filter((_, index) => index !== studentIndex);
      
      // Cập nhật localStorage
      localStorage.setItem('students', JSON.stringify(updatedStudents));

      // Cập nhật bảng
      updateTable();
    });
    
    $('#addStudentForm').on('submit', function(event) {
      event.preventDefault(); // Ngăn chặn gửi form

      // Lấy dữ liệu từ form
      const newStudent = {
          studentId: $('#newStudentId').val(),
          studentName: $('#newStudentName').val(),
          age: parseInt($('#newAge').val()),
          sex: $('#newSex').val() === "true", // Chuyển đổi giá trị
          birthDate: $('#newBirthDate').val(),
          birthPlace: $('#newBirthPlace').val(),
          address: $('#newAddress').val(),
      };

      // Lấy danh sách sinh viên hiện tại từ localStorage
      const students = JSON.parse(localStorage.getItem('students')) || [];

      // Thêm sinh viên mới vào danh sách
      students.push(newStudent);

      // Cập nhật localStorage
      localStorage.setItem('students', JSON.stringify(students));

      // Cập nhật bảng
      updateTable();

      // Đặt lại form
      $('#addStudentForm')[0].reset();
  });
  }

});
