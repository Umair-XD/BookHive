let Data = require("./models/book")
let mongoose = require("mongoose")
async function main() {
  await mongoose.connect("mongodb+srv://wasifbinnasir:wasifbinnasir@cluster0.h8sdsew.mongodb.net/fizabookhive?retryWrites=true&w=majority&appName=Cluster0")
}
main().then(() => {
  console.log("connection established");
}).catch((err) => {
  console.log(err);
})
const booksData = [
  //first year
  {
    title: "Engineering Physics By M. N. Avadhanulu",
    category: "Textbook",
    description: "A Textbook of Engineering Physics has been written primarily for the first year undergraduate students of engineering and also those of bachelors in sciences while also serving as a reference text for technologies and practitioners.",
    image: "https://m.media-amazon.com/images/I/516tWnCK01L._SY342_.jpg",
    price: "50",
    author: "M N Avadhanulu, TVS Arun Murthy & P G Kshirsagar",
    country: "United States",
    language: "English",
    link: "https://www.schoolchamp.net/a-textbook-of-engineering-physics-by-m-n-avadhanulu",
    info: "A Textbook of Engineering Physics' has been written primarily for the first year undergraduate students of engineering and also those of bachelors in sciences while also serving as a reference text for technologies and practitioners. The book explains all the relevant and important topics related to physics in an easy-to-understand manner. Fifty chapters, beginning with a detailed discussion on oscillation and waves, the book goes on to discuss semiconductors, optical fibers, lasers, nanotechnology, and liquid crystals. A book which has seen, foreseen and incorporated changes in the subject for more than 25 years, it continues to be one of the most sought-after texts by the students."
  },
  {
    title: "Engineering Mathematics",
    category: "Textbook",
    description: "A comprehensive book on Engineering Mathematics suitable for first-year students. It covers topics such as calculus, differential equations, linear algebra, and more.",
    image: "https://m.media-amazon.com/images/I/41LaegfnWnL._SY445_SX342_.jpg",
    price: "45",
    author: "K.A. Stroud",
    country: "United Kingdom",
    language: "English",
    link: "https://example.com/engineering-mathematics",
    info: "This book is designed to provide a solid foundation in engineering mathematics for first-year students. It offers clear explanations of mathematical concepts and includes numerous examples and exercises to reinforce learning."
  },
  {
    title: "Programming in C",
    category: "Programming",
    description: "A comprehensive textbook on programming in the C language covering topics such as variables, control structures, functions, arrays, pointers, and file handling.",
    author: "Stephen G. Kochan",
    price: "45",
    image: "https://m.media-amazon.com/images/I/51CxmVYKYsL._SY445_SX342_.jpg",
    link: "https://example.com/programming-in-c",
    country: "United States",
    info: "This book offers a thorough introduction to programming in the C language. It covers basic to advanced concepts, with practical examples and exercises to reinforce learning."
  },
  {
    title: "Chemistry for Engineers",
    category: "Textbook",
    description: "An introductory textbook on chemistry tailored for engineering students. It covers basic concepts such as atomic structure, chemical bonding, and reactions.",
    image: "https://m.media-amazon.com/images/I/61krAkI101L._SY466_.jpg",
    price: "55",
    author: "John T. Moore",
    country: "United States",
    language: "English",
    link: "https://example.com/chemistry-for-engineers",
    info: "This book provides a fundamental understanding of chemistry concepts essential for engineering students. It emphasizes the practical applications of chemistry in engineering disciplines."
  },
  {
    title: "Engineering Drawing",
    category: "Textbook",
    description: "A comprehensive guide to engineering drawing covering topics such as orthographic projection, isometric projection, and CAD software.",
    image: "https://m.media-amazon.com/images/I/5141vAW5lrL._SY445_SX342_.jpg",
    price: "40",
    author: "N.D. Bhatt",
    country: "India",
    language: "English",
    link: "https://example.com/engineering-drawing",
    info: "This book is designed to develop the drawing skills of engineering students. It covers both manual drafting techniques and computer-aided design (CAD) software."
  },
  {
    title: "Introduction to Programming",
    category: "Programming",
    description: "An introductory textbook on programming suitable for first-year students. It covers basic programming concepts using a popular programming language.",
    image: "https://m.media-amazon.com/images/I/81V-itCvcQL._SY466_.jpg",
    price: "35",
    author: "John Doe",
    country: "United States",
    language: "English",
    link: "https://example.com/introduction-to-programming",
    info: "This book introduces students to programming concepts such as variables, control structures, functions, and data types. It uses a step-by-step approach to teach programming principles."
  },
  {
    title: "Introduction to Electrical Engineering",
    category: "Textbook",
    description: "An introductory textbook on electrical engineering covering topics such as circuits, electromagnetism, and electrical machines.",
    image: "https://m.media-amazon.com/images/I/41qm5I91LFL._SY445_SX342_.jpg",
    price: "50",
    author: "Vincent Del Toro",
    country: "United States",
    language: "English",
    link: "https://example.com/introduction-to-electrical-engineering",
    info: "This book provides a solid foundation in electrical engineering principles for first-year students. It includes practical examples and exercises to reinforce learning."
  },
  {
    title: "Fundamentals of Materials Science and Engineering",
    category: "Textbook",
    description: "A comprehensive textbook on materials science and engineering covering topics such as atomic structure, phase diagrams, and mechanical properties.",
    image: "https://m.media-amazon.com/images/I/91yoBgwCkML._SY466_.jpg",
    price: "60",
    author: "William D. Callister Jr.",
    country: "United States",
    language: "English",
    link: "https://example.com/materials-science",
    info: "This book introduces students to the fundamentals of materials science and engineering. It emphasizes the relationship between structure, properties, processing, and performance of materials."
  },
  // second year books 
  {
    title: "Introduction to Algorithms",
    category: "Programming",
    description: "A comprehensive textbook on algorithms covering topics such as sorting, searching, and graph algorithms.",
    author: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein",
    country: "United States",
    price: "60",
    image: "https://m.media-amazon.com/images/I/61O5SsbL8HL._SY466_.jpg",
    link: "https://example.com/introduction-to-algorithms",
    info: "This book provides a thorough introduction to algorithms commonly used in computer science. It covers both theoretical concepts and practical implementations with numerous examples and exercises."
  },
  {
    title: "Database Management Systems",
    category: "Programming",
    description: "A textbook on database management systems covering topics such as relational databases, SQL, and database design.",
    author: "Raghu Ramakrishnan, Johannes Gehrke",
    country: "United States",
    price: "55",
    image: "https://m.media-amazon.com/images/I/61CUat-cJJL._SY466_.jpg",
    link: "https://example.com/database-management-systems",
    info: "This book offers a comprehensive introduction to database management systems. It covers both fundamental and advanced concepts, with a focus on practical applications and real-world scenarios."
  },
  {
    title: "Operating System Concepts",
    category: "Programming",
    description: "An introductory textbook on operating system concepts covering topics such as process management, memory management, and file systems.",
    author: "Abraham Silberschatz, Peter Baer Galvin, Greg Gagne",
    country: "United States",
    price: "50",
    image: "https://m.media-amazon.com/images/I/41+TH+OFZCL._SY445_SX342_.jpg",
    link: "https://example.com/operating-system-concepts",
    info: "This book provides a solid foundation in the principles of operating systems. It covers both theoretical concepts and practical aspects, with numerous examples and exercises to reinforce learning."
  },
  {
    title: "Introduction to Programming with Python",
    category: "Programming",
    description: "A beginner's textbook on programming using Python covering topics such as variables, control flow, functions, and data structures.",
    author: "John Zelle",
    price: "40",
    image: "https://m.media-amazon.com/images/I/419NS17nPKL._SY445_SX342_.jpg",
    link: "https://example.com/intro-to-python",
    country: "United States",
    info: "This book provides a gentle introduction to programming concepts using Python. It covers basic programming constructs and problem-solving techniques, with hands-on exercises and examples."
  },
  {
    title: "Discrete Mathematics and Its Applications",
    category: "Textbook",
    description: "A textbook on discrete mathematics covering topics such as logic, set theory, combinatorics, and graph theory.",
    author: "Kenneth H. Rosen",
    price: "50",
    image: "https://m.media-amazon.com/images/I/51E75M0Rm5L._SY445_SX342_.jpg",
    link: "https://example.com/discrete-mathematics",
    country: "United States",
    info: "This book offers a comprehensive introduction to discrete mathematics concepts and their applications. It covers both theoretical foundations and practical problem-solving techniques, with numerous examples and exercises."
  },
  {
    title: "Data Structures and Algorithms in Python",
    category: "Programming",
    description: "A textbook on data structures and algorithms covering topics such as arrays, linked lists, trees, sorting algorithms, and searching algorithms using Python.",
    author: "Michael T. Goodrich, Roberto Tamassia, Michael H. Goldwasser",
    price: "55",
    image: "https://m.media-amazon.com/images/I/51sV1Ue4E+L._SX342_SY445_.jpg",
    link: "https://example.com/data-structures-algorithms-python",
    country: "United States",
    info: "This book provides a comprehensive overview of data structures and algorithms using Python. It covers fundamental concepts, design techniques, and analysis of algorithms, with practical implementations and exercises."
  },
  {
    title: "Mechanics of Materials",
    category: "Textbook",
    description: "A comprehensive textbook on mechanics of materials covering topics such as stress, strain, torsion, and bending.",
    author: "Ferdinand P. Beer, E. Russell Johnston Jr., John T. DeWolf",
    country: "United States",
    price: "55",
    image: "https://m.media-amazon.com/images/I/51ffvSAc+fL._SY445_SX342_.jpg",
    link: "https://example.com/mechanics-of-materials",
    info: "This book provides a solid foundation in the principles of mechanics of materials for second-year students. It covers both theoretical concepts and practical applications with numerous examples and exercises."
  },
  {
    title: "Electric Circuits",
    category: "Textbook",
    description: "An introductory textbook on electric circuits covering topics such as Ohm's law, Kirchhoff's laws, and circuit analysis techniques.",
    author: "James W. Nilsson, Susan A. Riedel",
    country: "United States",
    price: "50",
    image: "https://rukminim2.flixcart.com/image/416/416/kdt50nk0/book/4/8/4/electronics-circuits-second-year-engineering-degree-entc-new-original-imafumhqygdg7grw.jpeg?q=70&crop=false",
    link: "https://example.com/electric-circuits",
    info: "This book introduces students to the fundamentals of electric circuits and circuit analysis techniques. It includes practical examples and exercises to reinforce learning."
  },
  {
    title: "Digital Electronics",
    category: "Textbook",
    description: "A comprehensive textbook on digital electronics covering topics such as Boolean algebra, logic gates, and sequential circuits.",
    author: "Thomas L. Floyd",
    country: "United States",
    price: "45",
    image: "https://m.media-amazon.com/images/I/81ZBMCOBPZL._AC_UY218_.jpg",
    link: "https://example.com/digital-electronics",
    info: "This book provides a solid foundation in digital electronics for second-year students. It covers both theoretical concepts and practical design techniques with numerous examples and exercises."
  },
  //third year books 
  {
    title: "Computer Networks",
    category: "Programming",
    description: "A comprehensive textbook on computer networks covering topics such as network protocols, routing algorithms, and network security.",
    author: "Andrew S. Tanenbaum, David J. Wetherall",
    price: "65",
    image: "https://m.media-amazon.com/images/I/41DDNTatx5L._SY466_.jpg",
    link: "https://example.com/computer-networks",
    country: "United States",
    info: "This book provides a thorough overview of computer networks and their underlying principles. It covers both theoretical concepts and practical implementations, with a focus on modern networking technologies and protocols."
  },
  {
    title: "Software Engineering",
    category: "Programming",
    description: "A textbook on software engineering covering topics such as software development methodologies, software testing, and software project management.",
    author: "Ian Sommerville",
    price: "60",
    image: "https://m.media-amazon.com/images/I/41Z7SzW4PRL._SX342_SY445_.jpg",
    link: "https://example.com/software-engineering",
    country: "United Kingdom",
    info: "This book offers a comprehensive introduction to software engineering principles and practices. It covers the entire software development lifecycle, from requirements engineering to maintenance, with a focus on practical techniques and tools."
  },
  {
    title: "Web Technologies",
    category: "Programming",
    description: "An introductory textbook on web technologies covering topics such as HTML, CSS, JavaScript, and web development frameworks.",
    author: "Jeffrey C. Jackson",
    price: "55",
    image: "https://m.media-amazon.com/images/I/51wmMrunyPL._SX342_SY445_.jpg",
    link: "https://example.com/web-technologies",
    country: "United States",
    info: "This book provides a solid foundation in web technologies and their applications. It covers both front-end and back-end development, with hands-on examples and projects to reinforce learning."
  },
  {
    title: "Machine Learning: A Probabilistic Perspective",
    category: "Science",
    description: "A comprehensive textbook on machine learning covering topics such as probabilistic models, Bayesian inference, and deep learning.",
    author: "Kevin P. Murphy",
    price: "70",
    image: "https://m.media-amazon.com/images/I/41+kXyPa6XL._SX342_SY445_.jpg",
    link: "https://example.com/machine-learning",
    country: "United States",
    info: "This book provides a rigorous introduction to machine learning from a probabilistic perspective. It covers a wide range of topics, including supervised and unsupervised learning, graphical models, and reinforcement learning, with numerous examples and exercises."
  },
  {
    title: "Data Mining: Concepts and Techniques",
    category: "Science",
    description: "A textbook on data mining covering topics such as association analysis, classification, clustering, and outlier detection.",
    author: "Jiawei Han, Micheline Kamber, Jian Pei",
    price: "65",
    image: "https://m.media-amazon.com/images/I/51TBH6xgCiS._SX342_SY445_.jpg",
    link: "https://example.com/data-mining",
    country: "United States",
    info: "This book offers a comprehensive overview of data mining techniques and algorithms. It covers both fundamental and advanced concepts, with a focus on practical applications and real-world case studies."
  },
  {
    title: "Deep Learning",
    category: "Science",
    description: "An introductory textbook on deep learning covering topics such as neural networks, convolutional networks, recurrent networks, and generative models.",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    price: "75",
    image: "https://m.media-amazon.com/images/I/A10G+oKN3LL._SY466_.jpg",
    link: "https://example.com/deep-learning",
    country: "Canada",
    info: "This book provides a comprehensive introduction to deep learning techniques and architectures. It covers both theoretical foundations and practical implementations, with a focus on training deep neural networks for various tasks."
  },
  //forth year books
  {
    title: "Cybersecurity: Principles and Practices",
    category: "Programming",
    description: "A comprehensive textbook on cybersecurity covering topics such as cryptography, network security, and security management.",
    author: "William Stallings, Lawrie Brown",
    price: "80",
    image: "https://m.media-amazon.com/images/I/61soqRJIbEL._SY466_.jpg",
    link: "https://example.com/cybersecurity",
    country: "United States",
    info: "This book provides an in-depth understanding of cybersecurity principles and practices. It covers a wide range of topics, including encryption algorithms, intrusion detection systems, and security policies, with real-world examples and case studies."
  },
  {
    title: "Cloud Computing: Concepts, Technology & Architecture",
    category: "Programming",
    description: "A textbook on cloud computing covering topics such as cloud service models, virtualization, and cloud security.",
    author: "Thomas Erl, Ricardo Puttini, Zaigham Mahmood",
    price: "75",
    image: "https://m.media-amazon.com/images/I/61THCj4q6FL._SX342_SY445_.jpg",
    link: "https://example.com/cloud-computing",
    country: "United States",
    info: "This book offers a comprehensive overview of cloud computing concepts, technologies, and architectures. It covers both theoretical foundations and practical implementations, with a focus on cloud service models, deployment models, and emerging trends."
  },
  {
    title: "Information Retrieval: Implementing and Evaluating Search Engines",
    category: "Programming",
    description: "An introductory textbook on information retrieval covering topics such as indexing, querying, and evaluation of search engines.",
    author: "Stefan Büttcher, Charles L. A. Clarke, Gordon V. Cormack",
    price: "70",
    image: "https://m.media-amazon.com/images/I/715ptznXPkL._SY466_.jpg",
    link: "https://example.com/information-retrieval",
    country: "Canada",
    info: "This book provides a practical introduction to information retrieval techniques and algorithms. It covers both traditional and modern approaches to building search engines, with a focus on indexing methods, retrieval models, and evaluation metrics."
  },
  {
    title: "Advanced Algorithms",
    category: "Programming",
    description: "A textbook on advanced algorithms covering topics such as approximation algorithms, randomized algorithms, and computational geometry.",
    author: "Sanjoy Dasgupta, Christos Papadimitriou, Umesh Vazirani",
    price: "85",
    image: "https://m.media-amazon.com/images/I/717rloCdahL._SY466_.jpg",
    link: "https://example.com/advanced-algorithms",
    country: "United States",
    info: "This book provides an in-depth exploration of advanced algorithms and their applications. It covers both theoretical analysis and practical algorithms, with a focus on solving complex computational problems efficiently."
  },
  {
    title: "Compiler Design: Principles, Techniques, and Tools",
    category: "Programming",
    description: "A comprehensive textbook on compiler design covering topics such as lexical analysis, syntax analysis, and code generation.",
    author: "Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman",
    price: "90",
    image: "https://m.media-amazon.com/images/I/71MvtEJneKL._SY466_.jpg",
    link: "https://example.com/compiler-design",
    country: "United States",
    info: "This book offers a thorough introduction to compiler design principles and techniques. It covers the entire compiler construction process, from lexical analysis to code optimization, with practical examples and case studies."
  },
  {
    title: "Artificial Intelligence: A Modern Approach",
    category: "Science",
    description: "An introductory textbook on artificial intelligence covering topics such as search algorithms, knowledge representation, and machine learning.",
    author: "Stuart Russell, Peter Norvig",
    price: "95",
    image: "https://m.media-amazon.com/images/I/81lVfGtNwnL._SY466_.jpg",
    link: "https://example.com/artificial-intelligence",
    country: "United States",
    info: "This book provides a comprehensive overview of artificial intelligence concepts and techniques. It covers both traditional and modern approaches to AI, with a focus on problem-solving methods, intelligent agents, and ethical considerations."
  },
  //business book
  {
    title: "Rich Dad Poor Dad",
    category: "Business",
    description: "what the rich teach their kids about money-- that the poor and middle class do not! / by Robert T. Kiyosaki with Sharon L. Lechter.",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Rich_Dad_Poor_Dad.jpg",
    price: "250",
    author: 'Robert Kiyosaki and Sharon L. Lechter',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Rich_Dad_Poor_Dad",
    info: "The story begins with the author as a young boy, observing the contrasting financial mindsets and behaviors of his two dads. His poor dad, who held a high position in education, emphasized the importance of academic success, job security, and living within one's means. On the other hand, his rich dad, a successful entrepreneur, believed in building assets, investing wisely, and acquiring financial knowledge. It describes how rich dad teaches the author and his friend finances by using actual life situations 'Throughout the book, Kiyosaki shares anecdotes and conversations that he had with his rich dad, who guided him on various aspects of money, wealth creation, and financial independence. He learns valuable lessons about the difference between assets and liabilities, the power of financial education, and the importance of taking calculated risks. Kiyosaki emphasizes the significance of acquiring assets that generate income, such as real estate and businesses, as opposed to liabilities that drain money, such as excessive consumer debt and unnecessary expenses. He introduces concepts like the cash flow quadrant, which categorizes individuals as employees, self-employed, business owners, or investors, highlighting the advantages and disadvantages of each quadrant'. "
  },
  {
    title: "Think and Grow Rich",
    category: "Business",
    description: "Think and Grow Rich is the result of Hill's study of over five hundred self-made millionaires",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e9/Think_and_grow_rich_original_cover.jpg",
    price: "250",
    author: 'Napoleon Hill and Rosa Lee Beeland',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Think_and_Grow_Rich",
    info: "Think and Grow Rich by Napoleon Hill is a timeless classic that outlines principles for achieving success in both personal and professional life. Hill emphasizes the power of the mind and the importance of a burning desire for achieving one's goals. Through the stories of successful individuals, he illustrates the significance of persistence, faith, and visualization in the pursuit of wealth and fulfillment. The book emphasizes the importance of setting clear, definite goals and developing a plan of action to achieve them. Hill also emphasizes the value of surrounding oneself with a mastermind group of like-minded individuals who can offer support and guidance. He stresses the importance of self-discipline and the ability to overcome fear, doubt, and procrastination. Ultimately, 'Think and Grow Rich' teaches that success is not a matter of luck or circumstance, but rather a result of one's thoughts, beliefs, and actions. It continues to inspire readers to unlock their full potential and achieve their dreams."
  },
  {
    title: "Business Adventures",
    category: "Business",
    description: "Business Adventures explores the highs and lows of corporate America through compelling narratives",
    image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405094011i/4191136.jpg",
    price: "250",
    author: 'John Brooks',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Business_Adventures",
    info: " 'Business Adventures' by John Brooks is a collection of twelve riveting tales that delve into the world of business and finance. Through compelling narratives, Brooks explores the highs and lows of corporate America, offering timeless lessons on entrepreneurship, leadership, and the dynamics of the marketplace. From the rise and fall of companies like Ford and Xerox to the intricacies of Wall Street and the challenges of managing a crisis, each story provides valuable insights into the complexities of business. Brooks' engaging storytelling style captivates readers while imparting practical wisdom that remains relevant decades after the book's initial publication. 'Business Adventures' serves as a compelling reminder that success in business often hinges on foresight, adaptability, and ethical decision-making. Whether it's navigating economic downturns, negotiating deals, or innovating in the face of adversity, the book offers a rich tapestry of real-world experiences that continue to resonate with entrepreneurs and executives alike."
  },
  {
    title: "Zero to One: Notes on Startups, Or How to Build the Future",
    category: "Business",
    description: "'Zero to One' suggests that businesses should prioritize innovation over globalization.",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Zero_to_One.jpg",
    price: "250",
    author: 'Peter Thiel with Blake Masters',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Zero_to_One",
    info: " Zero to One by Peter Thiel offers a provocative take on entrepreneurship and innovation, challenging conventional wisdom and urging aspiring entrepreneurs to strive for breakthrough success. Thiel argues that true innovation involves creating something entirely new, moving from zero to one, rather than simply replicating existing ideas or competing in crowded markets. He emphasizes the importance of monopolistic advantages and building a unique value proposition that sets a business apart from its competitors. Thiel encourages entrepreneurs to focus on creating and capturing value rather than engaging in destructive competition. Drawing on his experiences as a successful entrepreneur and investor, he provides insightful observations on topics such as the importance of technology, the role of luck, and the value of contrarian thinking. 'Zero to One' serves as a manifesto for ambitious founders who seek to build transformative companies capable of reshaping industries and driving progress. Thiel's contrarian perspective challenges readers to question conventional wisdom and think boldly about the future of business and technology."
  },
  {
    title: "Born a Crime",
    category: "Comedy",
    description: "Trevor Noah's Born a Crime is a brilliant and witty memoir that illustrates an unbreakable bond between mother and son.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Born_a_Crime_by_Trevor_Noah_%28book_cover%29.jpg",
    price: "250",
    author: 'Trevor Noah',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Born_a_Crime",
    info: " 'Born a Crime' by Trevor Noah is a captivating memoir that illuminates the complexities of growing up biracial in apartheid-era South Africa. Noah's narrative is both heartfelt and humorous as he shares anecdotes from his childhood, navigating the challenges of being born to a black Xhosa mother and a white Swiss father in a society where such unions were illegal. Through his experiences, Noah provides a window into the harsh realities of apartheid, the injustices faced by black South Africans, and the resilience of the human spirit in the face of adversity. From his mischievous antics as a child to his struggles with poverty and violence, Noah's storytelling is both poignant and engaging. He also reflects on the profound influence of his indomitable mother, whose strength and love shaped his worldview and sense of identity. 'Born a Crime' is a testament to the power of laughter, love, and perseverance in overcoming even the most formidable obstacles. Noah's memoir is not only a personal journey but also a reflection on the broader themes of race, class, and belonging that resonate far beyond the borders of South Africa."
  },
  {
    title: "Where'd You Go, Bernadette",
    category: "Comedy",
    description: "A misanthropic matriarch leaves her eccentric family in crisis when she mysteriously disappears in this whip-smart and divinely funny novel that inspired the movie starring Cate Blanchett.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/f1/Cover_of_%22Where%27d_You_Go%2C_Bernadette%22.jpg",
    price: "250",
    author: 'Maria Semple',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Where%27d_You_Go,_Bernadette#:~:text=Where'd%20You%20Go%2C%20Bernadette%20is%20a%202012%20epistolary%20comedy,a%20family%20trip%20to%20Antarctica.",
    info: "Whered You Go, Bernadette by Maria Semple is a quirky and captivating novel that follows the story of Bernadette Fox, a once-prominent architect who suddenly disappears, leaving her daughter Bee to unravel the mystery of her whereabouts. Set in Seattle, the novel is presented through a series of emails, letters, and documents, offering a unique and comedic narrative style. Through Bees investigation, readers are taken on a whirlwind journey that explores themes of family dynamics, creativity, and the pursuit of fulfillment. Semples sharp wit and satirical commentary on modern society add depth to the story, while the eccentric characters and unpredictable plot twists keep readers guessing until the very end. 'Where'd You Go, Bernadette is a delightful and thought-provoking read that ultimately celebrates the power of love, resilience, and the unexpected connections that bind us together."
  },
  {
    title: "Good Omens",
    category: "Comedy",
    description: "Good Omens is a comedic novel that follows the unlikely partnership between an angel and a demon as they work together to prevent the apocalypse.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0a/Goodomenscover.jpg",
    price: "250",
    author: 'Terry Pratchett, Neil Gaiman',
    country: "United Kingdom",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Good_Omens",
    info: "'Good Omens' by Neil Gaiman and Terry Pratchett is a hilarious and irreverent comedy that explores the unlikely friendship between an angel, Aziraphale, and a demon, Crowley, as they team up to prevent the impending apocalypse. Set against the backdrop of contemporary England, the novel blends satire, fantasy, and humor to offer a fresh take on the age-old battle between good and evil. Gaiman and Pratchett's witty dialogue and clever wordplay infuse the story with charm and wit, while their imaginative world-building and colorful cast of characters add depth and dimension to the narrative. From the Four Horsemen of the Apocalypse to a band of misfit witches, the novel is filled with memorable personalities and absurd situations that will leave readers laughing out loud. 'Good Omens' is a delightful romp through the end times, filled with clever twists and unexpected turns that will keep readers entertained from start to finish."
  },
  {
    title: "Bossypants",
    category: "Comedy",
    description: "Bossypants by Tina Fey is a humorous memoir that offers a witty and insightful look into Fey's life, career, and the challenges she faced as a female comedian in a male-dominated industry.",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7c/Bossypants_Cover_%28Tina_Fey%29_-_200px.jpeg",
    price: "250",
    author: 'Tina Fey',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Bossypants",
    info: " Bossypants by Tina Fey is a hilarious and candid memoir that offers readers a glimpse into the life and wit of one of comedy's most beloved figures. Through a series of witty anecdotes and sharp observations, Fey shares her journey from awkward childhood to acclaimed writer, comedian, and actress. Blending humor with insightful reflections on gender, work, and motherhood, Fey navigates the challenges and triumphs of her career with self-deprecating charm. From her early days at Second City to her groundbreaking work on 'Saturday Night Live' and '30 Rock,' Fey's storytelling is both entertaining and inspiring. Along the way, she offers valuable lessons on confidence, resilience, and the importance of staying true to oneself in a competitive industry. 'Bossypants' is not only a laugh-out-loud memoir but also a celebration of female empowerment and the power of humor to break down barriers. With its sharp wit and relatable humor, Fey's memoir is sure to leave readers entertained and inspired."
  },
  {
    title: "Yes Please",
    category: "Comedy",
    description: "'Yes Please' by Amy Poehler is a witty and candid memoir that offers valuable lessons on life, love, and laughter.",
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Yes_Please_book_cover.png",
    price: "250",
    author: 'Amy Poehler',
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Yes_Please",
    info: " 'Yes Please' by Amy Poehler is a comedic memoir that delves into the life and career of the beloved actress and comedian, offering readers an entertaining and heartfelt journey through her experiences in the world of comedy and beyond. Through a series of essays and anecdotes, Poehler shares her insights on topics ranging from her time on 'Saturday Night Live' to the joys and challenges of motherhood, all delivered with her signature wit and charm. With humor and honesty, she imparts valuable lessons on confidence, resilience, and the importance of embracing one's flaws. This engaging read celebrates the power of laughter and the rewards of following one's passions, making it a must-read for fans of comedy and memoir alike."
  },
  // horror
  {
    title: "The Exorcist",
    category: "Horror",
    description: "A horror novel by American writer William Peter Blatty, detailing the demonic possession of twelve-year-old Regan MacNeil and the Jesuit psychiatrist-priest who attempts to exorcise the demon.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Exorcist_1971.jpg",
    author: "William Peter Blatty",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Exorcist_(novel)",
    info: "'The Exorcist' by William Peter Blatty is a chilling tale of demonic possession and the battle between good and evil. Set in modern-day America, the story follows Father Damien Karras, a troubled priest grappling with his faith, as he is called to assist in the exorcism of a young girl named Regan. Blatty's masterful storytelling and vivid descriptions create an atmosphere of dread and suspense, drawing readers into a world where the supernatural clashes with the mundane. As the exorcism unfolds, Father Karras must confront his own inner demons while battling the malevolent force possessing Regan. 'The Exorcist' is a timeless classic that continues to terrify readers with its depiction of horror and its exploration of themes such as faith, doubt, and the nature of evil."
  },
  {
    title: "The Shining",
    category: "Horror",
    description: "A horror novel by American author Stephen King, following Jack Torrance, an aspiring writer and recovering alcoholic, who becomes the winter caretaker of the isolated Overlook Hotel in the Colorado Rockies.",
    image: "https://m.media-amazon.com/images/I/51iytv+IivL._SY445_SX342_.jpg",
    author: "Stephen King",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Shining_(novel)",
    info: "'The Shining' by Stephen King is a psychological horror novel that follows the Torrance family as they become the winter caretakers of the isolated Overlook Hotel. As Jack's sanity deteriorates and dark secrets of the hotel emerge, his son Danny's psychic abilities, known as 'the shining,' become crucial to the family's survival. King's masterful exploration of isolation, madness, and supernatural terror creates a haunting atmosphere that keeps readers on edge throughout the novel."
  },
  {
    title: "Dracula",
    category: "Horror",
    description: "A Gothic horror novel by Irish author Bram Stoker, telling the story of Count Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse.",
    image: "https://m.media-amazon.com/images/I/61z5NgKAcbL._SY466_.jpg",
    author: "Bram Stoker",
    country: "Ireland",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Dracula",
    info: "'Dracula' is a Gothic horror novel by Irish author Bram Stoker, presented as a collection of letters, diary entries, and newspaper clippings, adding to its eerie and atmospheric quality. It tells the story of Count Dracula's attempt to move from Transylvania to England so that he may find new blood and spread the undead curse, and of the battle between Dracula and a small group of people led by Professor Abraham Van Helsing. Stoker's vivid descriptions and richly drawn characters create a world of terror and suspense, where the line between the supernatural and the mundane blurs."
  },
  {
    title: "Frankenstein",
    category: "Horror",
    description: "A novel written by English author Mary Shelley, telling the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment.",
    image: "https://m.media-amazon.com/images/I/81Q95x7lD7L._SY466_.jpg",
    author: "Mary Shelley",
    country: "United Kingdom",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Frankenstein",
    info: "'Frankenstein; or, The Modern Prometheus' is a novel written by English author Mary Shelley, exploring themes of ambition, morality, and the consequences of scientific discovery. It tells the story of Victor Frankenstein, a young scientist who creates a grotesque creature in an unorthodox scientific experiment. The creature, often referred to as Frankenstein's monster, becomes increasingly resentful of its creator and wreaks havoc on Victor's life. Shelley's gripping narrative and vivid imagery create a world of gothic horror and moral ambiguity."
  },
  {
    title: "IT",
    category: "Horror",
    description: "A horror novel by American author Stephen King, telling the story of seven children who are terrorized by an evil entity that takes the form of a clown named Pennywise.",
    image: "https://m.media-amazon.com/images/I/81XZWZfinrS._SY466_.jpg",
    author: "Stephen King",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/IT_(novel)",
    info: "'IT' is a horror novel by American author Stephen King, known for its terrifying antagonist Pennywise the Dancing Clown. The story follows a group of seven children in the fictional town of Derry, Maine, who confront the malevolent entity known as IT. King's rich character development and intricate narrative draw readers into the inner lives of the characters, exploring their fears, traumas, and relationships."
  },
  // romance
  {
    title: "Pride and Prejudice",
    category: "Romance",
    description: "A romantic novel by English author Jane Austen, following the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/330px-PrideAndPrejudiceTitlePage.jpg",
    author: "Jane Austen",
    country: "United Kingdom",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
    info: "'Pride and Prejudice' is a romantic novel by English author Jane Austen, exploring themes of love, marriage, and social status. It follows the emotional development of the protagonist Elizabeth Bennet, who learns the error of making hasty judgments and comes to appreciate the difference between the superficial and the essential. Austen's sharp wit and keen observation of human nature bring the characters and social dynamics of early 19th-century England to life."
  },
  {
    title: "Jane Eyre",
    category: "Romance",
    description: "A novel by English writer Charlotte Bronte, following the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester.",
    image: "https://m.media-amazon.com/images/I/51shqpCZLcL._SX342_SY445_.jpg",
    author: "Charlotte Bronte",
    country: "United Kingdom",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Jane_Eyre",
    info: "'Jane Eyre' is a novel by English writer Charlotte Bronte, following the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall. Bronte's vivid prose and keen insight into human psychology create a compelling narrative that explores themes of love, morality, and social class."
  },
  {
    title: "Romeo and Juliet",
    category: "Romance",
    description: "A tragedy by William Shakespeare, telling the story of two young lovers whose deaths ultimately reconcile their feuding families.",
    image: "https://m.media-amazon.com/images/I/41CUaLDRmfL._SY445_SX342_.jpg",
    author: "William Shakespeare",
    country: "United Kingdom",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Romeo_and_Juliet",
    info: "'Romeo and Juliet' is a tragedy by William Shakespeare, telling the story of two young lovers whose deaths ultimately reconcile their feuding families. The play explores themes of love, fate, and the consequences of impulsive actions. Despite its tragic ending, 'Romeo and Juliet' is celebrated for its poetic language, memorable characters, and timeless portrayal of youthful passion."
  },
  {
    title: "Gone with the Wind",
    category: "Romance",
    description: "A novel by American writer Margaret Mitchell, set in the American South during the Civil War and Reconstruction era.",
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Gone_with_the_Wind_cover.jpg",
    author: "Margaret Mitchell",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Gone_with_the_Wind_(novel)",
    info: "'Gone with the Wind' is a novel by American writer Margaret Mitchell, set in the American South during the Civil War and Reconstruction era. It tells the story of Scarlett O'Hara, the strong-willed daughter of a Georgia plantation owner, and her tumultuous relationship with Rhett Butler, a dashing blockade runner. Mitchell's sweeping saga of love and war captures the complexities of Southern society and the struggles of individuals caught in the tide of history."
  },
  {
    title: "Wuthering Heights",
    category: "Romance",
    description: "A novel by English writer Emily Bronte, telling the story of Heathcliff, a mysterious orphan who is adopted by the Earnshaw family and falls in love with his foster sister, Catherine.",
    image: "https://m.media-amazon.com/images/I/41bKf2wWNCL._SY445_SX342_.jpg",
    author: "Emily Bronte",
    country: "United Kingdom",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Wuthering_Heights",
    info: "'Wuthering Heights' is a novel by English writer Emily Bronte, telling the story of Heathcliff, a mysterious orphan who is adopted by the Earnshaw family and falls in love with his foster sister, Catherine. The novel explores themes of passion, revenge, and the destructive power of love. Bronte's haunting tale of obsession and betrayal unfolds against the wild backdrop of the Yorkshire moors."
  },
  // cooking books
  {
    title: "Kitchen Confidential: Adventures in the Culinary Underbelly",
    category: "Cooking",
    description: "Kitchen Confidential is a memoir by American chef Anthony Bourdain, providing a behind-the-scenes look at the restaurant industry.",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1d/Kitchen_Confidential.jpg",
    author: "Anthony Bourdain",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Kitchen_Confidential",
    info: "'Kitchen Confidential: Adventures in the Culinary Underbelly' is a memoir by American chef Anthony Bourdain, offering readers an unfiltered look at the inner workings of the restaurant industry. Bourdain's candid storytelling and irreverent humor provide a behind-the-scenes glimpse into the chaotic and often high-pressure world of professional kitchens."
  },
  {
    title: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
    category: "Cooking",
    description: "Salt, Fat, Acid, Heat is a cookbook by American chef and food writer Samin Nosrat, exploring the fundamental principles of cooking.",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Salt_Fat_Acid_Heat_%28book%29.jpg",
    author: "Samin Nosrat",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Salt,_Fat,_Acid,_Heat",
    info: "'Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking' is a cookbook by American chef and food writer Samin Nosrat, offering readers a comprehensive guide to the fundamental principles of cooking. Through engaging prose and vibrant illustrations, Nosrat explores how salt, fat, acid, and heat can transform ingredients and enhance flavor in any dish."
  },
  {
    title: "The Omnivore's Dilemma: A Natural History of Four Meals",
    category: "Cooking",
    description: "The Omnivore's Dilemma is a non-fiction book by American author Michael Pollan, exploring the complex relationships between humans and food.",
    image: "https://upload.wikimedia.org/wikipedia/en/0/01/OmnivoresDilemma_full.jpg",
    author: "Michael Pollan",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/The_Omnivore%27s_Dilemma",
    info: "'The Omnivore's Dilemma: A Natural History of Four Meals' is a non-fiction book by American author Michael Pollan, exploring the complex relationships between humans and food. Through investigative journalism and personal anecdotes, Pollan traces the journey of four meals from source to plate, examining the environmental, ethical, and health implications of modern food production."
  },
  {
    title: "Mastering the Art of French Cooking",
    category: "Cooking",
    description: "Mastering the Art of French Cooking is a cookbook by American chef Julia Child, introducing French cuisine to an American audience.",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e6/MasteringTheArtOfFrenchCooking1edCover.jpg",
    author: "Julia Child, Simone Beck, Louisette Bertholle",
    country: "United States",
    language: "English",
    link: "https://en.wikipedia.org/wiki/Mastering_the_Art_of_French_Cooking",
    info: "'Mastering the Art of French Cooking' is a cookbook by American chef Julia Child, along with Simone Beck and Louisette Bertholle, offering readers a comprehensive guide to classic French cuisine. Originally published in 1961, the book revolutionized home cooking in America, introducing readers to the techniques and recipes of French cooking in a clear and accessible manner."
  },
  // programming books
  {
    title: "C++ Primer",
    category: "Programming",
    description: "C++ Primer is a comprehensive introduction to the C++ programming language.",
    image: "https://m.media-amazon.com/images/I/71vil4NdEPL._SY466_.jpg",
    author: "Stanley B. Lippman, Josée Lajoie, Barbara E. Moo",
    country: "United States",
    language: "English",
    link: "https://www.amazon.com/Primer-5th-Stanley-B-Lippman/dp/0321714113",
    info: "C++ Primer is a comprehensive introduction to the C++ programming language. Written by Stanley B. Lippman, Josée Lajoie, and Barbara E. Moo, this book covers fundamental C++ concepts such as variables, control structures, functions, classes, templates, and the standard library. With clear explanations and practical examples, it is suitable for both novice and experienced programmers looking to enhance their C++ skills."
  },
  {
    title: "Head First Java",
    category: "Programming",
    description: "Head First Java is a beginner-friendly guide to Java programming.",
    image: "https://m.media-amazon.com/images/I/61F0oIyk8eS._SY466_.jpg",
    author: "Kathy Sierra, Bert Bates",
    country: "United States",
    language: "English",
    link: "https://www.amazon.com/Head-First-Java-Kathy-Sierra/dp/0596009208",
    info: "Head First Java is a beginner-friendly guide to Java programming by Kathy Sierra and Bert Bates. This book takes a unique approach to teaching Java, combining engaging visuals, puzzles, and real-world examples to help readers grasp Java concepts quickly and effectively. From basic syntax to advanced topics like object-oriented programming and GUI development, Head First Java covers it all in an accessible and entertaining manner."
  },
  {
    title: "Python Crash Course",
    category: "Programming",
    description: "Python Crash Course is a fast-paced introduction to Python programming for beginners.",
    image: "https://m.media-amazon.com/images/I/51JcFufVwGL._SY445_SX342_.jpg",
    author: "Eric Matthes",
    country: "United States",
    language: "English",
    link: "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280",
    info: "Python Crash Course by Eric Matthes is a fast-paced introduction to Python programming for beginners. With a focus on practical projects and hands-on exercises, this book teaches fundamental Python concepts such as variables, data types, control structures, functions, and modules. Whether you're new to programming or transitioning from another language, Python Crash Course offers a clear and engaging path to mastering Python programming."
  },
  {
    title: "JavaScript: The Good Parts",
    category: "Programming",
    description: "JavaScript: The Good Parts explores the best practices and effective techniques for writing high-quality JavaScript code.",
    image: "https://m.media-amazon.com/images/I/7185IMvz88L._SY466_.jpg",
    author: "Douglas Crockford",
    country: "United States",
    language: "English",
    link: "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742",
    info: "JavaScript: The Good Parts by Douglas Crockford explores the best practices and effective techniques for writing high-quality JavaScript code. This book focuses on the most useful and reliable parts of the JavaScript language, helping readers write clean, elegant code that avoids common pitfalls and promotes good programming practices. Whether you're a beginner or experienced JavaScript developer, JavaScript: The Good Parts serves as an essential guide to mastering the finer points of the JavaScript language."
  },
  {
    title: "The C Programming Language",
    category: "Programming",
    description: "The C Programming Language is a classic book that provides a concise introduction to the C programming language.",
    image: "https://m.media-amazon.com/images/I/51EyaJeebHL._SY466_.jpg",
    author: "Brian W. Kernighan, Dennis M. Ritchie",
    country: "United States",
    language: "English",
    link: "https://www.amazon.com/Programming-Language-2nd-Brian-Kernighan/dp/0131103628",
    info: "The C Programming Language by Brian W. Kernighan and Dennis M. Ritchie is a classic book that provides a concise introduction to the C programming language. Often referred to as K&R C, this book covers essential C concepts such as variables, data types, control structures, functions, and pointers. With clear explanations and practical examples, it remains one of the most widely read and respected books on C programming."
  },
];

Data.insertMany(booksData)
  .then(insertedDocuments => {
    console.log("Documents inserted:", insertedDocuments.length);
    console.log("Data saved successfully.");
  })
  .catch(error => {
    console.error("Error inserting documents:", error);
  });

// Data.deleteMany({})
//   .then(() => Data.insertMany(booksData))
//   .then(() => {
//     console.log("Data reset and reinserted.");
//   })
//   .catch(console.error);

