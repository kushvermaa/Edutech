var booksModal = document.getElementById("booksModal");
var courseModal = document.getElementById("courseModal");
var boardModal = document.getElementById("boardModal");
var examModal = document.getElementById("examModal");
var closeBtn=document.getElementsByClassName("")
// Get the button that opens the modal
var books_btn = document.getElementById("books-btn");
var course_btn = document.getElementById("course-btn");
var board_btn = document.getElementById("board-btn");
var exam_btn = document.getElementById("exam-btn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var close_book=document.getElementById("close-book");
var close_course=document.getElementById("close-course");
var close_board=document.getElementById("close-board");
var close_exam=document.getElementById("close-exam");
// When the user clicks the button, open the modal 
books_btn.onclick = function() {
  booksModal.style.display = "block";
}

course_btn.onclick = function() {
  courseModal.style.display = "block";
}

board_btn.onclick = function() {
  boardModal.style.display = "block";
}

exam_btn.onclick = function() {
  examModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close_book.onclick = function() {
  booksModal.style.display = "none";
}

close_course.onclick = function() {
  courseModal.style.display = "none";
}

close_board.onclick = function() {
  boardModal.style.display = "none";
}

close_exam.onclick = function() {
  examModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }