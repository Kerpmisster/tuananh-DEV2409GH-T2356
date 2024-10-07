$(document).ready(function(){
    let isEditting = false;
    let edittingIndex = null;

    if(!localStorage.getItem('students')){
        const students = [
            {studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan"},
            {studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền"},
            {studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng"},
            {studentId: "SV004", studentName: "Nguyễn Văn D", age: 19, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng"},
        ];
        localStorage.setItem('students', JSON.stringify(students));
    };
    function getStd(){
        return JSON.parse(localStorage.getItem('students')) || [];
    };
    function saveStd(students){
        localStorage.setItem('students',JSON.stringify(students));
    };
    function refreshTable(){
        const students = getStd();
        $('#stdList').html('');
        students.forEach((student, index) => {
            $('#stdList').append(`
                <tr>
                    <td>${index + 1}</td>
                    <td>${student.studentId}</td>
                    <td>${student.studentName}</td>
                    <td>${student.age}</td>
                    <td>${student.sex ? 'Nam' : 'Nữ'}</td>
                    <td>
                        <button class="btn btn-danger btn-view" data-index="${index}" onclick="myFunction()">Xem</button>
                        <button class="btn btn-warning text-light btn-edit" data-index="${index}">Sửa</button>
                        <button class="btn btn-success btn-delete" data-index="${index}">Xóa</button>
                    </td>
                </tr>
                `);
        });
    };
    $('#saveStdForm').submit(function(e){
        e.preventDefaults();
        const students = getStd();
        const student = {
            studentId: $('#StdId').val(),
            studentName: $('#StdName').val(),
            age: parseInt($('#StdAge').val()),
            sex: $('#StdGender').val() === "true", // Chuyển đổi giá trị
            birthDate: $('#StdBirth').val(),
            birthPlace: $('#StdPlace').val(),
            address: $('#StdAddress').val(),
        }
        if(isEditting){
            students[edittingIndex] = student;
            isEditting=false;
            edittingIndex=null;
        }
        else{
            student.push(students);
        }
        saveStd(students);
        refreshTable();
        $('#stdList').hide();
        $('#saveStdForm')[0].reset();
    });

    $('#addStdBtn').click(function(){
        $('#stdList').show();
        $('#formTitle').text('Thêm mới sinh viên');
        $('#saveStdForm')[0].reset;
        isEditting=false;
    });

    $(document).on('click','.btn-edit',function(){
        edittingIndex=$(this).data('data');
        const students = getStd();
        const student = students[edittingIndex];

        $('#StdId').val(student.studentId);
        $('#StdName').val(student.studentName);
        $('#StdAge').val(student.age);
        $('#StdGender').val(student.sex);
        $('#StdBirth').val(student.birthDate);
        $('#StdPlace').val(student.birthPlace);
        $('#StdAddress').val(student.address);
        $('#stdList').show();
        $('#formTitle').text('Sửa sinh viên');
        isEditting=true;
    });

    $(document).on('click','.btn-view',function(){
        const index = $(this).data('index');
        const students = getStd();
        const student = students[Index];

        $('#StdId').val(student.studentId);
        $('#StdName').val(student.studentName);
        $('#StdAge').val(student.age);
        $('#StdGender').val(student.sex);
        $('#StdBirth').val(student.birthDate);
        $('#StdPlace').val(student.birthPlace);
        $('#StdAddress').val(student.address);
        $('#stdList').show();

        $('#formTitle').text('Thông tin sinh viên');
    });

    $(document).on('click','.btn-delete',function(){
        const index = $(this).data('index');
        let students = getStd();
        students.splice(index,1);
        saveStd(students);
        refreshTable();
    });

    $('#search').submit(function(e){
        e.preventDefaults();

        const searchTerm= $('#searched').val().toLowerCase();
        const sortOption = $('#sortSelect').val();
        let students = getStd();
        if(searchTerm){
            students = students.filter(student=>
                student.studentName.toLowerCase().includes(searchTerm)
            );
        }
           
        if(sortOption === 'nameAsc'){
            students.sort((a,b) => a.studentName.localCompare(b.studentName));
        }
        else if (sortOption === 'nameDesc'){
            students.sort((a,b) => b.studentName.localCompare(a.studentName));
        }
        else if (sortOption === 'ageAsc'){
            students.sort((a,b) => a.age - b.age);
        }
        else if (sortOption === 'ageDesc'){
            students.sort((a,b) => b.age - a.age);
        }

        refreshTable(students);
    });

    refreshTable();
});
