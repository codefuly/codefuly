//service images

const services = [
  {
    heading: 'Technology consulting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/7075/people-office-group-team.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350',
    id: 'service-1',
  },
  {
    heading: 'Application development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-2',
  },
  {
    heading: 'Web design',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-3',
  },
  {
    heading: 'Ecommerce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/5598/tablet-galaxy-white-blog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-4',
  },
  {
    heading: 'Content management systems (CMS)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-5',
  },
  {
    heading: 'Social media advertising',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-6',
  },
  {
    heading: 'Software prototyping',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/136320/pexels-photo-136320.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-7',
  },
  {
    heading: 'Branding',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    id: 'service-8',
  },
  {
    heading: 'Outsourcing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eligendi error vitae sed quaerat repudiandae, optio placeat reiciendis facilis fugit minus culpa, eius, blanditiis reprehenderit doloremque atque quidem voluptates consequatur velit rerum sint. Error fugit dolores, a earum eveniet maxime!',
    comments:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi, officiis sint animi nemo natus blanditiis officia ipsam harum ut!',
    image:
      'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350',
    id: 'service-9',
  },
]

export default services
