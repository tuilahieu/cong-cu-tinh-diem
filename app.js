const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = $('.form-control');
const input = $$('input.input-control');
let diemTrungBinhNam12 = form.elements[0];
let diemVan = form.elements[1];
let diemToan = form.elements[2];
let diemAnh = form.elements[3];
let diemLi = form.elements[4];
let diemHoa = form.elements[5];
let diemSinh = form.elements[6];

const result = $('#result');
const status = $('.status');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    let monThu4 = (Number(diemHoa.value) + Number(diemLi.value) + Number(diemSinh.value)) / 3;
    let syntax = (((Number(diemVan.value) + Number(diemToan.value) + Number(diemAnh.value) + monThu4) / 4 * 7) + (Number(diemTrungBinhNam12.value) * 3) )/ 10;
    [...input].forEach((input) => {
        if(input.value < 0 || input.value > 10) {
            alert('Bạn đã nhập sai thông số. \n - CÓ 1 MÔN TRÊN 10 ĐIỂM \n hoặc \n CÓ 1 MÔN DƯỚI 0 ĐIỂM');
        }
    });

    result.innerText = syntax;
    if(syntax >= 5) {
        status.classList = 'status passed';
        status.innerText = 'Chúc mừng bạn đã đỗ tốt nghiệp THPT 2022.';
    } else {
        status.classList = 'status failed';
        status.innerText = 'Rất tiếc, bạn đã trượt tốt nghiệp THPT 2022.';
    };
})