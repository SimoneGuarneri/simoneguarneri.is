anime({
  targets: ".path",
  strokeDashoffset: [2000, 0],
  easing: "easeInOutSine",
  duration: 5000
});

tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'parkford': ['Parkford', 'Open Sans']
      },
      fontSize:{
        '10xl': '10rem'
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
      },
    }
  }
}

