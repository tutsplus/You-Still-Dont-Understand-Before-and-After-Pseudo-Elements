// Add the active class to the demo nav based on file name
let url = window.location.pathname
let filename = url.substring(url.lastIndexOf('/') + 1)
let navList = Array.from(document.querySelectorAll('.sidebar nav ul li a'))

navList.forEach(item => {
	if (item.href.substring(item.href.lastIndexOf('/') + 1) === filename) {
		item.parentElement.classList.add('active')

		return
	}
})