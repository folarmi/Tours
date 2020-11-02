const tours = [
  {
    id: 1,
    title: "Best of Enugu in 10 days",
    price: "250,000",
    details:
      "Praesent id fringilla nulla. Mauris sagittis, erat eget pulvinar sagittis, diam ipsum posuere mauris, sed pharetra dolor neque vitae ante. Etiam sodales euismod augue, et suscipit risus vehicula at. Proin venenatis in massa id convallis. In tristique, velit pharetra cursus molestie, elit diam hendrerit purus, vel tristique nunc dui ut ante. Vivamus rutrum ex nec justo gravida, sit amet accumsan tortor consequat. Morbi nisi felis, tempus at mi ut, luctus aliquet ex. Phasellus id nunc tincidunt, commodo purus vel, finibus lorem. Morbi tempor metus quis imperdiet dictum. Integer sed efficitur tellus.Sed a convallis velit. Aliquam et eros a orci fermentum aliquam id eu purus. Proin imperdiet nulla et tempor congue. Suspendisse potenti. Nunc tincidunt porttitor nunc, vel finibus eros lacinia facilisis. Aliquam gravida purus eu orci hendrerit, vitae porta est maximus. Class",
    image:
      "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
  },
  {
    id: 2,
    title: "Best of Ibadan in 17 days Tour",
    price: "150,000",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ornare arcu, quis bibendum dui molestie ac. Praesent id fringilla nulla. Mauris sagittis, erat eget pulvinar sagittis, diam ipsum posuere mauris, sed pharetra dolor neque vitae ante. Etiam sodales euismod augue, et suscipit risus vehicula at. Proin venenatis in massa id convallis. In tristique, velit pharetra cursus molestie, elit diam hendrerit purus, vel tristique nunc dui ut ante. Vivamus rutrum ex nec justo gravida, sit amet accumsan tortor consequat. Morbi nisi felis, tempus at mi ut, luctus aliquet ex. Phasellus id nunc tincidunt, commodo purus vel, finibus lorem. Morbi tempor metus quis imperdiet dictum. Integer sed efficitur tellus.Sed a convallis velit. Aliquam et eros a orci fermentum aliquam id eu purus. Proin imperdiet nulla et tempor congue. Suspendisse potenti. Nunc tincidunt porttitor nunc, vel finibus eros lacinia facilisis. Aliquam gravida purus eu orci hendrerit, vitae porta est maximus. Class.",
    image:
      "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
  },
  {
    id: 3,
    title: "Best of Kaduna in 23 days Tour",
    price: "300,000",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ornare arcu, quis bibendum dui molestie ac. Praesent id fringilla nulla. Mauris sagittis, erat eget pulvinar sagittis, diam ipsum posuere mauris, sed pharetra dolor neque vitae ante. Etiam sodales euismod augue, et suscipit risus vehicula at. Proin venenatis in massa id convallis. In tristique, velit pharetra cursus molestie, elit diam hendrerit purus, vel tristique nunc dui ut ante. Vivamus rutrum ex nec justo gravida, sit amet accumsan tortor consequat. Morbi nisi felis, tempus at mi ut, luctus aliquet ex. Phasellus id nunc tincidunt, commodo purus vel, finibus lorem. Morbi tempor metus quis imperdiet dictum. Integer sed efficitur tellus.Sed a convallis velit. Aliquam et eros a orci fermentum aliquam id eu purus. Proin imperdiet nulla et tempor congue. Suspendisse potenti. Nunc tincidunt porttitor nunc, vel finibus eros lacinia facilisis. Aliquam gravida purus eu orci hendrerit, vitae porta est maximus. Class.",
    image:
      "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
  },
  {
    id: 4,
    title: "Best of Abuja in 45 days Tour",
    price: "500,000",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ornare arcu, quis bibendum dui molestie ac. Praesent id fringilla nulla. Mauris sagittis, erat eget pulvinar sagittis, diam ipsum posuere mauris, sed pharetra dolor neque vitae ante. Etiam sodales euismod augue, et suscipit risus vehicula at. Proin venenatis in massa id convallis. In tristique, velit pharetra cursus molestie, elit diam hendrerit purus, vel tristique nunc dui ut ante. Vivamus rutrum ex nec justo gravida, sit amet accumsan tortor consequat. Morbi nisi felis, tempus at mi ut, luctus aliquet ex. Phasellus id nunc tincidunt, commodo purus vel, finibus lorem. Morbi tempor metus quis imperdiet dictum. Integer sed efficitur tellus.Sed a convallis velit. Aliquam et eros a orci fermentum aliquam id eu purus. Proin imperdiet nulla et tempor congue. Suspendisse potenti. Nunc tincidunt porttitor nunc, vel finibus eros lacinia facilisis. Aliquam gravida purus eu orci hendrerit, vitae porta est maximus. Class.",
    image:
      "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
  },
  {
    id: 5,
    title: "Best of Lasgidi in 10 days",
    price: "450,000",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus ornare arcu, quis bibendum dui molestie ac. Praesent id fringilla nulla. Mauris sagittis, erat eget pulvinar sagittis, diam ipsum posuere mauris, sed pharetra dolor neque vitae ante. Etiam sodales euismod augue, et suscipit risus vehicula at. Proin venenatis in massa id convallis. In tristique, velit pharetra cursus molestie, elit diam hendrerit purus, vel tristique nunc dui ut ante. Vivamus rutrum ex nec justo gravida, sit amet accumsan tortor consequat. Morbi nisi felis, tempus at mi ut, luctus aliquet ex. Phasellus id nunc tincidunt, commodo purus vel, finibus lorem. Morbi tempor metus quis imperdiet dictum. Integer sed efficitur tellus.Sed a convallis velit. Aliquam et eros a orci fermentum aliquam id eu purus. Proin imperdiet nulla et tempor congue. Suspendisse potenti. Nunc tincidunt porttitor nunc, vel finibus eros lacinia facilisis. Aliquam gravida purus eu orci hendrerit, vitae porta est maximus. Class.",
    image:
      "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
  },
];

export default tours;
