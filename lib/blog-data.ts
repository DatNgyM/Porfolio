import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Giới thiệu về Java và JVM",
    slug: "gioi-thieu-ve-java-va-jvm",
    excerpt:
      "Tìm hiểu về ngôn ngữ lập trình Java và Java Virtual Machine (JVM) - nền tảng của nhiều ứng dụng enterprise hiện đại.",
    content: `# Giới thiệu về Java và JVM

## Java và JVM: Nền tảng của lập trình hiện đại

Java là một trong những ngôn ngữ lập trình phổ biến nhất thế giới, được hàng triệu developer sử dụng để xây dựng các ứng dụng từ web, mobile đến enterprise systems. Được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995, Java đã trải qua hơn 25 năm phát triển và vẫn đang mạnh mẽ cho đến ngày nay.

Nếu bạn đang bắt đầu học lập trình Java hoặc muốn hiểu rõ hơn về cách Java hoạt động, bài viết này sẽ giúp bạn nắm được những kiến thức cơ bản về Java và Java Virtual Machine (JVM) - hai khái niệm không thể tách rời.

---

## Tìm hiểu về Java và JVM

### Java là gì?

Java là một ngôn ngữ lập trình hướng đối tượng (Object-Oriented Programming), được thiết kế với triết lý **"Write Once, Run Anywhere" (WORA)**. Điều này có nghĩa là bạn chỉ cần viết code một lần, và nó có thể chạy trên bất kỳ nền tảng nào (Windows, Linux, macOS) mà không cần phải viết lại code, miễn là nền tảng đó có cài đặt Java Virtual Machine (JVM).

### Java Virtual Machine (JVM)

JVM là một máy ảo thực thi bytecode Java. Đây là thành phần quan trọng nhất của Java Runtime Environment (JRE). Quá trình hoạt động của Java như sau:

1. **Bước 1**: Bạn viết code Java (file .java)
2. **Bước 2**: Compiler biên dịch code thành bytecode (file .class)
3. **Bước 3**: JVM đọc và thực thi bytecode

Ví dụ một chương trình Java đơn giản:

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

Khi bạn compile file này bằng lệnh \`javac HelloWorld.java\`, bạn sẽ nhận được file \`HelloWorld.class\` chứa bytecode. Sau đó, JVM sẽ thực thi bytecode này khi bạn chạy \`java HelloWorld\`.

### Ưu điểm của Java

#### 1. Đa nền tảng (Platform Independent)
- Code một lần, chạy mọi nơi nhờ JVM
- Không cần biên dịch lại cho từng hệ điều hành
- Tăng hiệu quả phát triển phần mềm

#### 2. Bảo mật cao
- Sandbox security model ngăn chặn các chương trình độc hại
- Bytecode verification trước khi thực thi
- Quản lý bộ nhớ tự động giảm lỗi memory leak

#### 3. Hiệu năng tốt
- Just-In-Time (JIT) compilation tối ưu hóa hiệu suất
- Garbage collection tự động quản lý bộ nhớ
- Được sử dụng rộng rãi trong các ứng dụng yêu cầu hiệu năng cao

#### 4. Ecosystem phong phú
- Nhiều thư viện và framework mạnh mẽ (Spring, Hibernate, Maven...)
- Cộng đồng developer lớn mạnh
- Tài liệu và tài nguyên học tập phong phú

### Ứng dụng của Java

Java được sử dụng trong nhiều lĩnh vực:

- **Enterprise Applications**: Các hệ thống lớn, web applications
- **Android Development**: Ứng dụng mobile Android
- **Web Applications**: Backend services, RESTful APIs
- **Big Data**: Hadoop, Spark
- **Internet of Things (IoT)**: Embedded systems
- **Financial Services**: Banking, trading systems

---

## Tổng kết và bước tiếp theo

Java và JVM tạo thành một nền tảng mạnh mẽ và linh hoạt cho việc phát triển phần mềm. Với khả năng chạy đa nền tảng, bảo mật cao, và ecosystem phong phú, Java vẫn là lựa chọn hàng đầu cho nhiều doanh nghiệp và developer trên toàn thế giới.

### Bước tiếp theo

Bây giờ bạn đã hiểu cơ bản về Java và JVM, hãy thử:

1. **Cài đặt Java Development Kit (JDK)** trên máy tính của bạn
2. **Viết và chạy chương trình Hello World** đầu tiên
3. **Tìm hiểu thêm** về các tính năng của Java như OOP, Collections Framework, và Multithreading

Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại để lại comment. Chúc bạn học Java vui vẻ! 🚀`,
    category: "Java",
    tags: ["Java", "JVM", "Programming Basics"],
    author: "Your Name",
    date: "2024-12-15",
    readTime: 5,
  },
  {
    id: "2",
    title: "JavaScript ES6+ - Các tính năng mới",
    slug: "javascript-es6-cac-tinh-nang-moi",
    excerpt:
      "Khám phá các tính năng mới trong ES6+ như arrow functions, destructuring, promises, và async/await giúp code JavaScript hiện đại hơn.",
    content: `# JavaScript ES6+ - Các tính năng mới

## ES6+: Cuộc cách mạng trong JavaScript

JavaScript đã trải qua một cuộc cách mạng lớn với sự ra đời của ES6 (ECMAScript 2015) vào năm 2015. Phiên bản này đã mang đến hàng loạt tính năng mới giúp JavaScript từ một ngôn ngữ "toy language" trở thành một ngôn ngữ lập trình mạnh mẽ, hiện đại và được yêu thích bởi hàng triệu developer trên toàn thế giới.

Nếu bạn đang làm việc với JavaScript hoặc muốn viết code JavaScript hiện đại hơn, việc nắm vững các tính năng ES6+ là điều bắt buộc. Bài viết này sẽ giới thiệu những tính năng quan trọng nhất mà bạn nên biết.

---

## Các tính năng ES6+ quan trọng

### 1. Arrow Functions

Arrow functions (hàm mũi tên) là một trong những tính năng được sử dụng phổ biến nhất của ES6. Chúng cung cấp cú pháp ngắn gọn hơn và xử lý \`this\` binding khác với function truyền thống.

#### So sánh ES5 và ES6+

\`\`\`javascript
// ES5 - Function expression
var multiply = function(a, b) {
    return a * b;
};

// ES6+ - Arrow function
const multiply = (a, b) => a * b;

// Arrow function với một tham số (không cần dấu ngoặc đơn)
const square = x => x * x;

// Arrow function với nhiều dòng code
const greet = (name) => {
    const message = \`Hello, \${name}!\`;
    return message.toUpperCase();
};
\`\`\`

#### Lưu ý về \`this\` binding

Arrow functions không có \`this\` riêng của chúng - chúng kế thừa \`this\` từ scope bên ngoài. Điều này rất hữu ích trong các callback:

\`\`\`javascript
// ES5 - Phải bind this
var obj = {
    name: "JavaScript",
    getName: function() {
        var self = this;
        setTimeout(function() {
            console.log(self.name); // Phải dùng self
        }, 1000);
    }
};

// ES6+ - Arrow function tự động bind this
const obj = {
    name: "JavaScript",
    getName: function() {
        setTimeout(() => {
            console.log(this.name); // this được bind tự động
        }, 1000);
    }
};
\`\`\`

### 2. Destructuring

Destructuring cho phép bạn "unpack" dữ liệu từ arrays và objects vào các biến riêng biệt một cách dễ dàng.

#### Array Destructuring

\`\`\`javascript
// Cơ bản
const numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(first);  // 1
console.log(second); // 2

// Bỏ qua phần tử
const [first, , third] = [1, 2, 3];

// Giá trị mặc định
const [a = 10, b = 20] = [1];
console.log(a); // 1
console.log(b); // 20

// Rest operator
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
\`\`\`

#### Object Destructuring

\`\`\`javascript
// Cơ bản
const person = { name: "John", age: 30, city: "Hanoi" };
const { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30

// Đổi tên biến
const { name: personName, age: personAge } = person;

// Giá trị mặc định
const { name, age, country = "Vietnam" } = person;

// Destructuring trong function parameters
function greet({ name, age }) {
    console.log(\`Hello, I'm \${name}, \${age} years old\`);
}
greet({ name: "John", age: 30 });
\`\`\`

### 3. Template Literals

Template literals cho phép bạn tạo chuỗi với cú pháp dễ đọc hơn và hỗ trợ string interpolation.

\`\`\`javascript
// ES5
var name = "John";
var message = "Hello, " + name + "! Welcome to JavaScript.";

// ES6+
const name = "John";
const message = \`Hello, \${name}! Welcome to JavaScript.\`;

// Multi-line strings
const html = \`
<div>
    <h1>Title</h1>
    <p>Content</p>
</div>
\`;

// Expression trong template literals
const price = 100;
const tax = 0.1;
const total = \`Total: \${price * (1 + tax)}\`;
\`\`\`

### 4. Promises và Async/Await

#### Promises

Promise là một cách xử lý asynchronous operations tốt hơn callbacks, giúp tránh "callback hell".

\`\`\`javascript
// Promise cơ bản
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data");
        }
    }, 1000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

// Promise với fetch API
fetch('/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
\`\`\`

#### Async/Await

Async/await làm cho code bất đồng bộ trông giống như code đồng bộ, dễ đọc và dễ hiểu hơn.

\`\`\`javascript
// Async function
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Sử dụng
fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Hoặc trong async function khác
async function main() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

### 5. Spread và Rest Operators

#### Spread Operator (...)

Spread operator cho phép "mở rộng" một iterable (array, string) thành các phần tử riêng lẻ.

\`\`\`javascript
// Copy array
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3]

// Merge arrays
const arr3 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Copy object
const obj1 = { name: "John", age: 30 };
const obj2 = { ...obj1, city: "Hanoi" }; // { name: "John", age: 30, city: "Hanoi" }

// Function arguments
const numbers = [1, 2, 3, 4, 5];
Math.max(...numbers); // 5
\`\`\`

#### Rest Operator

Rest operator thu thập các phần tử còn lại vào một array.

\`\`\`javascript
// Function parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4, 5); // 15

// Destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest);  // [2, 3, 4, 5]
\`\`\`

---

## Tổng kết và bước tiếp theo

ES6+ đã thay đổi cách chúng ta viết JavaScript một cách đáng kể. Các tính năng như arrow functions, destructuring, template literals, promises, async/await, và spread/rest operators giúp code JavaScript trở nên:

- **Ngắn gọn hơn**: Viết ít code hơn để đạt được cùng kết quả
- **Dễ đọc hơn**: Code tự mô tả, dễ hiểu
- **Dễ bảo trì hơn**: Ít lỗi hơn, dễ refactor
- **Hiện đại hơn**: Theo kịp các xu hướng lập trình mới

### Bước tiếp theo

Để nắm vững các tính năng ES6+, hãy thử:

1. **Refactor code cũ** của bạn sang sử dụng ES6+ syntax
2. **Tìm hiểu thêm** về các tính năng khác như classes, modules, generators
3. **Thực hành** với các dự án thực tế để áp dụng các kiến thức đã học

Những kiến thức này sẽ giúp bạn viết code JavaScript chuyên nghiệp và hiện đại hơn. Chúc bạn coding vui vẻ! 🚀`,
    category: "JavaScript",
    tags: ["JavaScript", "ES6", "Modern JavaScript"],
    author: "Your Name",
    date: "2024-12-16",
    readTime: 7,
  },
  {
    id: "3",
    title: "Network Programming với Java Socket",
    slug: "network-programming-voi-java-socket",
    excerpt:
      "Học cách tạo ứng dụng client-server sử dụng Java Socket API để giao tiếp qua mạng.",
    content: `# Network Programming với Java Socket

## Network Programming: Kết nối thế giới qua mạng

Trong thời đại kỹ thuật số ngày nay, hầu hết các ứng dụng đều cần kết nối mạng để giao tiếp với các hệ thống khác. Cho dù đó là ứng dụng chat, game online, hay web server, việc hiểu cách xây dựng ứng dụng network là kỹ năng quan trọng đối với mọi developer.

Java Socket API là một trong những công cụ mạnh mẽ nhất để xây dựng ứng dụng network. Nó cung cấp các class và interface giúp bạn tạo kết nối giữa các máy tính qua mạng một cách dễ dàng và hiệu quả.

Bài viết này sẽ hướng dẫn bạn cách sử dụng Java Socket API để xây dựng các ứng dụng client-server cơ bản.

---

## Xây dựng ứng dụng Client-Server với Java Socket

### 1. Giới thiệu về Sockets

Socket là một điểm cuối (endpoint) của kết nối hai chiều giữa hai chương trình chạy trên mạng. Có hai loại socket chính:

- **ServerSocket**: Chờ đợi và nhận kết nối từ clients
- **Socket**: Được sử dụng bởi cả client và server để giao tiếp

### 2. Xây dựng Server Socket

Server socket sẽ lắng nghe trên một cổng (port) cụ thể và chờ đợi các client kết nối đến.

#### Server cơ bản

\`\`\`java
import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        try {
            // Tạo ServerSocket lắng nghe trên port 8080
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server đang chờ kết nối trên port 8080...");
            
            // Chờ và chấp nhận kết nối từ client
            Socket clientSocket = serverSocket.accept();
            System.out.println("Client đã kết nối: " + clientSocket.getInetAddress());
            
            // Tạo output stream để gửi dữ liệu đến client
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            
            // Tạo input stream để nhận dữ liệu từ client
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            
            // Đọc và phản hồi dữ liệu từ client
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Client gửi: " + inputLine);
                out.println("Echo: " + inputLine); // Gửi lại cho client
                
                // Thoát nếu client gửi "quit"
                if (inputLine.equals("quit")) {
                    break;
                }
            }
            
            // Đóng kết nối
            in.close();
            out.close();
            clientSocket.close();
            serverSocket.close();
            
        } catch (IOException e) {
            System.err.println("Lỗi Server: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
\`\`\`

#### Server hỗ trợ nhiều clients (Multi-threaded)

Để server có thể xử lý nhiều clients đồng thời, chúng ta cần sử dụng multithreading:

\`\`\`java
import java.net.*;
import java.io.*;

public class MultiThreadedServer {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server đang chờ kết nối...");
            
            // Chấp nhận kết nối liên tục
            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client mới đã kết nối: " + clientSocket.getInetAddress());
                
                // Tạo thread mới để xử lý client
                ClientHandler clientHandler = new ClientHandler(clientSocket);
                new Thread(clientHandler).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

class ClientHandler implements Runnable {
    private Socket clientSocket;
    
    public ClientHandler(Socket socket) {
        this.clientSocket = socket;
    }
    
    @Override
    public void run() {
        try {
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println("Client " + clientSocket.getInetAddress() + " gửi: " + inputLine);
                out.println("Echo: " + inputLine);
                
                if (inputLine.equals("quit")) {
                    break;
                }
            }
            
            in.close();
            out.close();
            clientSocket.close();
            
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

### 3. Xây dựng Client Socket

Client sẽ kết nối đến server và gửi/nhận dữ liệu.

\`\`\`java
import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) {
        String hostname = "localhost";
        int port = 8080;
        
        try {
            // Kết nối đến server
            Socket socket = new Socket(hostname, port);
            System.out.println("Đã kết nối đến server: " + hostname + ":" + port);
            
            // Tạo output stream để gửi dữ liệu
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            
            // Tạo input stream để nhận dữ liệu
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            
            // Tạo BufferedReader để đọc input từ console
            BufferedReader userInput = new BufferedReader(
                new InputStreamReader(System.in)
            );
            
            String userMessage;
            String serverResponse;
            
            // Gửi và nhận messages
            System.out.println("Nhập tin nhắn (gõ 'quit' để thoát):");
            while ((userMessage = userInput.readLine()) != null) {
                out.println(userMessage); // Gửi message đến server
                
                serverResponse = in.readLine(); // Nhận response từ server
                System.out.println("Server: " + serverResponse);
                
                if (userMessage.equals("quit")) {
                    break;
                }
            }
            
            // Đóng kết nối
            userInput.close();
            in.close();
            out.close();
            socket.close();
            
        } catch (UnknownHostException e) {
            System.err.println("Không tìm thấy server: " + hostname);
        } catch (IOException e) {
            System.err.println("Lỗi Client: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
\`\`\`

### 4. Xử lý dữ liệu phức tạp

#### Gửi Object qua Socket

Để gửi các object phức tạp, chúng ta có thể sử dụng ObjectInputStream và ObjectOutputStream:

\`\`\`java
import java.io.*;
import java.net.*;

// Class cần implement Serializable
class Message implements Serializable {
    private String content;
    private String sender;
    
    public Message(String content, String sender) {
        this.content = content;
        this.sender = sender;
    }
    
    // Getters và Setters
    public String getContent() { return content; }
    public String getSender() { return sender; }
}

// Server side
ObjectOutputStream oos = new ObjectOutputStream(
    clientSocket.getOutputStream()
);
ObjectInputStream ois = new ObjectInputStream(
    clientSocket.getInputStream()
);

Message message = (Message) ois.readObject();
oos.writeObject(new Message("Response", "Server"));

// Client side
ObjectOutputStream oos = new ObjectOutputStream(
    socket.getOutputStream()
);
ObjectInputStream ois = new ObjectInputStream(
    socket.getInputStream()
);

oos.writeObject(new Message("Hello", "Client"));
Message response = (Message) ois.readObject();
\`\`\`

### 5. Best Practices

- **Luôn đóng streams và sockets**: Sử dụng try-with-resources để đảm bảo
- **Xử lý exceptions**: Luôn catch và xử lý IOException
- **Sử dụng threads**: Để xử lý nhiều clients đồng thời
- **Timeout**: Thiết lập timeout cho các operations
- **Buffering**: Sử dụng BufferedReader/BufferedWriter cho hiệu năng tốt hơn

---

## Tổng kết và bước tiếp theo

Java Socket API cung cấp một cách mạnh mẽ và linh hoạt để xây dựng các ứng dụng network. Từ ứng dụng chat đơn giản đến các hệ thống client-server phức tạp, Socket API là nền tảng cho nhiều công nghệ hiện đại.

### Những gì bạn đã học được:

- Cách tạo server socket và chấp nhận kết nối
- Cách tạo client socket và kết nối đến server
- Xử lý nhiều clients đồng thời với multithreading
- Gửi/nhận dữ liệu qua network
- Best practices khi làm việc với sockets

### Bước tiếp theo

Để nâng cao kỹ năng network programming, hãy thử:

1. **Xây dựng ứng dụng chat**: Chat room với nhiều người dùng
2. **File transfer**: Gửi/nhận file qua socket
3. **Game server**: Tạo server cho game đơn giản
4. **Tìm hiểu NIO**: Java NIO cho hiệu năng cao hơn
5. **Security**: Thêm SSL/TLS cho kết nối bảo mật

Chúc bạn code vui vẻ và thành công với network programming! 🚀`,
    category: "Network Programming",
    tags: ["Java", "Socket", "Network Programming"],
    author: "Your Name",
    date: "2024-12-17",
    readTime: 8,
  },
  {
    id: "4",
    title: "Java Collections Framework",
    slug: "java-collections-framework",
    excerpt:
      "Tìm hiểu về Collections Framework trong Java - ArrayList, HashMap, Set và cách sử dụng chúng hiệu quả.",
    content: `# Java Collections Framework

## Collections Framework: Công cụ quản lý dữ liệu mạnh mẽ

Khi làm việc với Java, bạn sẽ thường xuyên cần lưu trữ và quản lý nhóm các đối tượng. Thay vì phải tự tạo các cấu trúc dữ liệu từ đầu, Java cung cấp một bộ framework mạnh mẽ và đầy đủ: **Collections Framework**.

Java Collections Framework là một trong những tính năng quan trọng nhất của Java, cung cấp các cấu trúc dữ liệu sẵn có, tối ưu hóa, và các thuật toán để xử lý chúng. Hiểu rõ Collections Framework sẽ giúp bạn viết code hiệu quả hơn và tận dụng được sức mạnh của Java.

Bài viết này sẽ giới thiệu các interface và class quan trọng nhất trong Collections Framework, cùng với cách sử dụng chúng trong thực tế.

---

## Các cấu trúc dữ liệu trong Collections Framework

### 1. Tổng quan về Collections Framework

Collections Framework trong Java được xây dựng dựa trên các interface và class chính:

- **Collection**: Interface gốc cho các collection (trừ Map)
- **List**: Collection có thứ tự, cho phép duplicates
- **Set**: Collection không có duplicates
- **Map**: Cấu trúc key-value, không extend Collection interface
- **Queue**: Collection theo kiểu FIFO (First In First Out)

### 2. List Interface

List là một collection có thứ tự (ordered), cho phép duplicates và các phần tử có thể được truy cập bằng index.

#### ArrayList

ArrayList là implementation phổ biến nhất của List, sử dụng mảng động để lưu trữ.

\`\`\`java
import java.util.*;

// Tạo ArrayList
List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("JavaScript");
list.add("Java"); // Cho phép duplicate

// Truy cập phần tử
String first = list.get(0); // "Java"

// Duyệt qua list
for (String lang : list) {
    System.out.println(lang);
}

// Hoặc sử dụng iterator
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Tìm kiếm
int index = list.indexOf("Python"); // 1
boolean contains = list.contains("JavaScript"); // true

// Xóa phần tử
list.remove("Java"); // Xóa phần tử đầu tiên
list.remove(0); // Xóa phần tử tại index 0
\`\`\`

**Ưu điểm của ArrayList:**
- Truy cập nhanh theo index (O(1))
- Phù hợp cho việc đọc dữ liệu thường xuyên

**Nhược điểm:**
- Thêm/xóa phần tử ở giữa chậm (O(n))
- Cần resize mảng khi đầy

#### LinkedList

LinkedList sử dụng doubly-linked list để lưu trữ dữ liệu.

\`\`\`java
List<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);

// Thêm ở đầu
linkedList.add(0, 0);

// Thêm ở cuối
linkedList.add(4);

// Xóa phần tử đầu
linkedList.removeFirst();

// Xóa phần tử cuối
linkedList.removeLast();
\`\`\`

**Ưu điểm của LinkedList:**
- Thêm/xóa phần tử nhanh (O(1))
- Phù hợp cho việc thay đổi cấu trúc thường xuyên

**Nhược điểm:**
- Truy cập theo index chậm (O(n))
- Tốn bộ nhớ hơn ArrayList

#### Vector

Vector tương tự ArrayList nhưng là synchronized (thread-safe), nhưng ít được sử dụng trong Java hiện đại.

### 3. Set Interface

Set là collection không cho phép duplicates. Java cung cấp các implementation phổ biến:

#### HashSet

HashSet sử dụng hash table để lưu trữ, không đảm bảo thứ tự.

\`\`\`java
Set<String> set = new HashSet<>();
set.add("Java");
set.add("Python");
set.add("JavaScript");
set.add("Java"); // Duplicate, sẽ bị bỏ qua

System.out.println(set.size()); // 3

// Kiểm tra tồn tại
boolean hasJava = set.contains("Java"); // true

// Xóa phần tử
set.remove("Python");

// Duyệt qua set
for (String item : set) {
    System.out.println(item);
}
\`\`\`

#### LinkedHashSet

LinkedHashSet giống HashSet nhưng giữ thứ tự chèn (insertion order).

\`\`\`java
Set<String> linkedHashSet = new LinkedHashSet<>();
linkedHashSet.add("Java");
linkedHashSet.add("Python");
linkedHashSet.add("JavaScript");
// Thứ tự: Java, Python, JavaScript
\`\`\`

#### TreeSet

TreeSet sử dụng Red-Black tree, tự động sắp xếp các phần tử.

\`\`\`java
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);
treeSet.add(4);
// Kết quả: [1, 2, 3, 4] - đã được sắp xếp

// TreeSet với custom comparator
Set<String> sortedSet = new TreeSet<>((a, b) -> b.compareTo(a));
sortedSet.add("Java");
sortedSet.add("Python");
sortedSet.add("JavaScript");
// Sắp xếp giảm dần
\`\`\`

### 4. Map Interface

Map lưu trữ dữ liệu dưới dạng key-value pairs. Key phải là unique.

#### HashMap

HashMap sử dụng hash table, không đảm bảo thứ tự.

\`\`\`java
Map<String, Integer> map = new HashMap<>();
map.put("Java", 95);
map.put("Python", 90);
map.put("JavaScript", 88);

// Lấy giá trị
Integer javaScore = map.get("Java"); // 95

// Kiểm tra key
boolean hasJava = map.containsKey("Java"); // true

// Kiểm tra value
boolean hasScore = map.containsValue(95); // true

// Lấy tất cả keys
Set<String> keys = map.keySet();

// Lấy tất cả values
Collection<Integer> values = map.values();

// Duyệt qua map
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
\`\`\`

#### LinkedHashMap

LinkedHashMap giữ thứ tự chèn.

\`\`\`java
Map<String, Integer> linkedMap = new LinkedHashMap<>();
linkedMap.put("Java", 95);
linkedMap.put("Python", 90);
linkedMap.put("JavaScript", 88);
// Thứ tự được giữ nguyên
\`\`\`

#### TreeMap

TreeMap tự động sắp xếp keys.

\`\`\`java
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Java", 95);
treeMap.put("Python", 90);
treeMap.put("JavaScript", 88);
// Keys được sắp xếp: JavaScript, Java, Python
\`\`\`

### 5. Queue Interface

Queue là collection theo nguyên tắc FIFO (First In First Out).

\`\`\`java
Queue<String> queue = new LinkedList<>();
queue.offer("First");
queue.offer("Second");
queue.offer("Third");

// Lấy và xóa phần tử đầu
String first = queue.poll(); // "First"

// Xem phần tử đầu (không xóa)
String next = queue.peek(); // "Second"
\`\`\`

### 6. Collections Utility Class

Class Collections cung cấp nhiều phương thức tiện ích để làm việc với collections.

\`\`\`java
List<Integer> numbers = new ArrayList<>(Arrays.asList(3, 1, 4, 1, 5, 9));

// Sắp xếp
Collections.sort(numbers);

// Đảo ngược
Collections.reverse(numbers);

// Tìm kiếm (phải sắp xếp trước)
Collections.sort(numbers);
int index = Collections.binarySearch(numbers, 4);

// Tìm max/min
Integer max = Collections.max(numbers);
Integer min = Collections.min(numbers);

// Xáo trộn
Collections.shuffle(numbers);

// Điền giá trị
Collections.fill(numbers, 0); // Tất cả phần tử = 0

// Tần suất xuất hiện
int frequency = Collections.frequency(numbers, 1);
\`\`\`

### 7. Best Practices

- **Chọn đúng collection**: ArrayList cho random access, LinkedList cho insert/delete, HashSet cho uniqueness
- **Sử dụng generics**: Luôn khai báo type để tránh ClassCastException
- **Iteration**: Sử dụng enhanced for-loop hoặc iterator
- **Thread safety**: Sử dụng Collections.synchronizedList() hoặc ConcurrentHashMap nếu cần
- **Performance**: Hiểu time complexity của các operations

---

## Tổng kết và bước tiếp theo

Java Collections Framework là công cụ mạnh mẽ và không thể thiếu khi lập trình Java. Nó cung cấp các cấu trúc dữ liệu được tối ưu hóa và tested kỹ lưỡng, giúp bạn tập trung vào logic nghiệp vụ thay vì phải tự implement các cấu trúc dữ liệu.

### Tóm tắt các collection quan trọng:

| Collection | Thứ tự | Duplicates | Null values | Best for |
|------------|--------|------------|-------------|----------|
| **ArrayList** | Yes | Yes | Yes | Random access, reading |
| **LinkedList** | Yes | Yes | Yes | Insert/delete operations |
| **HashSet** | No | No | Yes | Uniqueness, fast lookup |
| **TreeSet** | Sorted | No | No | Sorted unique elements |
| **HashMap** | No | No keys | Yes | Key-value pairs |
| **TreeMap** | Sorted keys | No keys | No | Sorted key-value pairs |

### Bước tiếp theo

Để nâng cao kỹ năng sử dụng Collections:

1. **Thực hành**: Viết các chương trình sử dụng nhiều loại collection khác nhau
2. **Stream API**: Tìm hiểu Java Stream API để xử lý collections hiện đại hơn
3. **Custom Comparator**: Học cách tạo comparator tùy chỉnh
4. **Performance**: So sánh performance giữa các collection types
5. **Concurrent Collections**: Tìm hiểu về thread-safe collections

Hãy thực hành thường xuyên để nắm vững Collections Framework! Chúc bạn học tốt! 🚀`,
    category: "Java",
    tags: ["Java", "Collections", "Data Structures"],
    author: "Your Name",
    date: "2024-12-18",
    readTime: 6,
  },
  {
    id: "5",
    title: "JavaScript Closures và Scope",
    slug: "javascript-closures-va-scope",
    excerpt:
      "Hiểu rõ về closures, scope trong JavaScript và cách chúng hoạt động - kiến thức quan trọng cho mọi JavaScript developer.",
    content: `# JavaScript Closures và Scope

## Scope và Closures: Nền tảng của JavaScript

Khi học JavaScript, có hai khái niệm quan trọng mà mọi developer đều phải nắm vững: **Scope** (phạm vi) và **Closures** (bao đóng). Đây là những kiến thức nền tảng giúp bạn hiểu cách JavaScript hoạt động và viết code hiệu quả hơn.

Nhiều developer JavaScript gặp khó khăn với closures vì chúng có vẻ phức tạp và trừu tượng. Tuy nhiên, một khi bạn hiểu rõ cách chúng hoạt động, bạn sẽ nhận ra rằng closures là một công cụ mạnh mẽ giúp bạn viết code sạch hơn, bảo mật hơn, và tận dụng được sức mạnh của JavaScript.

Bài viết này sẽ giải thích chi tiết về scope và closures, cùng với các ví dụ thực tế để bạn có thể áp dụng ngay.

---

## Tìm hiểu về Scope và Closures

### 1. Scope trong JavaScript

Scope xác định phạm vi truy cập của biến trong code. JavaScript có ba loại scope chính:

#### Global Scope

Biến được khai báo ở global scope có thể truy cập từ bất kỳ đâu trong chương trình.

\`\`\`javascript
// Global scope
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "Me too";

function myFunction() {
    console.log(globalVar); // Có thể truy cập
    console.log(globalLet); // Có thể truy cập
    console.log(globalConst); // Có thể truy cập
}
\`\`\`

#### Function Scope (Local Scope)

Biến được khai báo trong function chỉ có thể truy cập trong function đó.

\`\`\`javascript
function outerFunction() {
    // Function scope (local scope)
    var outerVar = "I'm in outer function";
    let outerLet = "I'm also in outer function";
    
    function innerFunction() {
        // Inner function scope
        var innerVar = "I'm in inner function";
        
        // Có thể truy cập biến từ scope bên ngoài
        console.log(globalVar); // ✅ Có thể truy cập
        console.log(outerVar);  // ✅ Có thể truy cập
        console.log(innerVar);  // ✅ Có thể truy cập
    }
    
    innerFunction();
    
    // console.log(innerVar); // ❌ Error: innerVar is not defined
}

outerFunction();
\`\`\`

#### Block Scope (ES6+)

Với \`let\` và \`const\`, biến có block scope - chỉ tồn tại trong khối code \`{}\`.

\`\`\`javascript
if (true) {
    var varVariable = "I'm function scoped";
    let letVariable = "I'm block scoped";
    const constVariable = "I'm also block scoped";
}

console.log(varVariable); // ✅ Có thể truy cập
// console.log(letVariable); // ❌ Error: letVariable is not defined
// console.log(constVariable); // ❌ Error: constVariable is not defined

// Loop example
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i); // In ra: 3, 3, 3 (vì var không có block scope)
    }, 100);
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j); // In ra: 0, 1, 2 (let có block scope)
    }, 100);
}
\`\`\`

### 2. Lexical Scoping

JavaScript sử dụng lexical scoping (static scoping), có nghĩa là scope được xác định bởi vị trí khai báo biến trong code, không phải nơi gọi function.

\`\`\`javascript
const name = "Global";

function outer() {
    const name = "Outer";
    
    function inner() {
        console.log(name); // "Outer" - sử dụng name gần nhất trong lexical scope
    }
    
    inner();
}

outer(); // In ra: "Outer"
\`\`\`

### 3. Closures

Closure là một function có thể truy cập biến từ scope bên ngoài ngay cả sau khi function bên ngoài đã return. Closure "nhớ" môi trường nơi nó được tạo ra.

#### Closure cơ bản

\`\`\`javascript
function outerFunction() {
    const outerVariable = "I'm from outer function";
    
    // innerFunction là một closure
    function innerFunction() {
        console.log(outerVariable); // Truy cập outerVariable từ scope bên ngoài
    }
    
    return innerFunction; // Return function, không gọi nó
}

const closure = outerFunction();
closure(); // "I'm from outer function"
// outerFunction đã return nhưng closure vẫn nhớ outerVariable
\`\`\`

#### Ví dụ thực tế: Counter

\`\`\`javascript
function createCounter() {
    let count = 0; // Biến private trong closure
    
    return function() {
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (counter riêng biệt)
console.log(counter1()); // 3
\`\`\`

Mỗi lần gọi \`createCounter()\`, một closure mới được tạo với biến \`count\` riêng của nó.

#### Closure với tham số

\`\`\`javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
\`\`\`

### 4. Ứng dụng thực tế của Closures

#### Module Pattern

Closures cho phép tạo private variables và methods, giống như trong OOP:

\`\`\`javascript
const calculator = (function() {
    // Private variable
    let result = 0;
    
    // Private function
    function validateNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }
    
    // Public API
    return {
        add: function(x) {
            if (validateNumber(x)) {
                result += x;
            }
            return this; // Method chaining
        },
        multiply: function(x) {
            if (validateNumber(x)) {
                result *= x;
            }
            return this;
        },
        subtract: function(x) {
            if (validateNumber(x)) {
                result -= x;
            }
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

calculator.add(5).multiply(2).subtract(3);
console.log(calculator.getResult()); // 7
// console.log(calculator.result); // undefined - không thể truy cập private variable
\`\`\`

#### Event Handlers và Callbacks

\`\`\`javascript
function setupButton(buttonId, message) {
    const button = document.getElementById(buttonId);
    
    // Closure giữ lại biến message
    button.addEventListener('click', function() {
        alert(message); // Sử dụng message từ outer scope
    });
}

setupButton('btn1', 'Button 1 clicked!');
setupButton('btn2', 'Button 2 clicked!');
\`\`\`

#### Function Factories

\`\`\`javascript
function createValidator(rules) {
    return function(value) {
        if (rules.minLength && value.length < rules.minLength) {
            return false;
        }
        if (rules.maxLength && value.length > rules.maxLength) {
            return false;
        }
        if (rules.pattern && !rules.pattern.test(value)) {
            return false;
        }
        return true;
    };
}

const emailValidator = createValidator({
    minLength: 5,
    maxLength: 50,
    pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
});

const passwordValidator = createValidator({
    minLength: 8,
    maxLength: 20,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$/
});

console.log(emailValidator("test@example.com")); // true
console.log(passwordValidator("Password123")); // true
\`\`\`

#### Debounce và Throttle

\`\`\`javascript
// Debounce - chỉ thực thi sau khi người dùng ngừng hành động
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Sử dụng
const handleSearch = debounce(function(query) {
    console.log("Searching for:", query);
}, 300);

// Throttle - giới hạn số lần thực thi trong một khoảng thời gian
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
\`\`\`

### 5. Lưu ý quan trọng về Closures

#### Memory Leaks

Closures giữ lại reference đến các biến, có thể gây memory leak nếu không cẩn thận:

\`\`\`javascript
// ❌ Vấn đề: element bị giữ lại trong closure
function attachHandler() {
    const element = document.getElementById('myElement');
    const largeData = new Array(1000000).fill(0);
    
    element.addEventListener('click', function() {
        console.log('Clicked');
        // Closure giữ lại largeData ngay cả khi không dùng
    });
}

// ✅ Giải pháp: null reference khi không cần
function attachHandlerFixed() {
    const element = document.getElementById('myElement');
    const largeData = new Array(1000000).fill(0);
    
    element.addEventListener('click', function handler() {
        console.log('Clicked');
        element.removeEventListener('click', handler);
        // Giải phóng memory
    });
}
\`\`\`

#### Loop và Closures

Một lỗi phổ biến khi sử dụng closures trong loops:

\`\`\`javascript
// ❌ Vấn đề: Tất cả functions cùng share một biến i
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // In ra: 3, 3, 3
    }, 100);
}

// ✅ Giải pháp 1: Sử dụng let (block scope)
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // In ra: 0, 1, 2
    }, 100);
}

// ✅ Giải pháp 2: IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // In ra: 0, 1, 2
        }, 100);
    })(i);
}

// ✅ Giải pháp 3: bind()
for (var i = 0; i < 3; i++) {
    setTimeout(function(j) {
        console.log(j);
    }.bind(null, i), 100);
}
\`\`\`

---

## Tổng kết và bước tiếp theo

Scope và Closures là những khái niệm cốt lõi trong JavaScript, giúp bạn hiểu cách code JavaScript hoạt động và viết code tốt hơn. Closures cho phép bạn:

- **Tạo private variables**: Bảo vệ dữ liệu khỏi truy cập từ bên ngoài
- **Tạo function factories**: Tạo functions động với cấu hình khác nhau
- **Implement patterns**: Module pattern, singleton pattern, etc.
- **Xử lý events**: Giữ lại context trong event handlers

### Tóm tắt quan trọng:

- **Scope** xác định phạm vi truy cập biến (global, function, block)
- **Lexical scoping** nghĩa là scope được xác định bởi vị trí code, không phải nơi gọi
- **Closure** là function nhớ môi trường nơi nó được tạo
- **Cẩn thận với memory leaks** khi sử dụng closures
- **Sử dụng let/const** thay vì var để tránh lỗi trong loops

### Bước tiếp theo

Để nâng cao hiểu biết về closures:

1. **Thực hành**: Viết các ví dụ về closures từ đơn giản đến phức tạp
2. **Design Patterns**: Tìm hiểu Module Pattern, Singleton Pattern sử dụng closures
3. **Functional Programming**: Closures là nền tảng của functional programming
4. **Debugging**: Học cách debug closures trong DevTools

Hiểu rõ closures sẽ giúp bạn viết code JavaScript chuyên nghiệp và tận dụng được sức mạnh của ngôn ngữ này. Chúc bạn học tốt! 🚀`,
    category: "JavaScript",
    tags: ["JavaScript", "Closures", "Scope"],
    author: "Your Name",
    date: "2024-12-19",
    readTime: 9,
  },
  {
    id: "6",
    title: "Java Multithreading",
    slug: "java-multithreading",
    excerpt:
      "Học cách sử dụng multithreading trong Java để tạo ứng dụng đa luồng hiệu quả.",
    content: `# Java Multithreading

## Multithreading: Tận dụng sức mạnh đa luồng

Trong thế giới hiện đại, hiệu năng là yếu tố quan trọng quyết định sự thành công của một ứng dụng. Java Multithreading là một tính năng mạnh mẽ cho phép ứng dụng của bạn thực thi nhiều tác vụ đồng thời, tận dụng tối đa sức mạnh của CPU đa nhân và cải thiện trải nghiệm người dùng.

Cho dù bạn đang xây dựng ứng dụng web xử lý hàng nghìn request, ứng dụng desktop với giao diện responsive, hay hệ thống xử lý dữ liệu lớn, hiểu rõ multithreading là kỹ năng không thể thiếu.

Bài viết này sẽ hướng dẫn bạn từ cơ bản đến nâng cao về multithreading trong Java, bao gồm cách tạo threads, xử lý synchronization, và sử dụng ExecutorService để quản lý threads hiệu quả.

---

## Làm việc với Threads trong Java

### 1. Giới thiệu về Multithreading

Multithreading cho phép một chương trình Java thực thi nhiều tác vụ đồng thời. Mỗi tác vụ chạy trong một thread riêng biệt, và nhiều threads có thể chạy song song, chia sẻ tài nguyên của process.

**Lợi ích của Multithreading:**
- **Tận dụng CPU đa nhân**: Sử dụng nhiều cores cùng lúc
- **Cải thiện hiệu năng**: Xử lý song song nhiều tác vụ
- **Responsive UI**: Giao diện không bị đơ khi xử lý tác vụ nặng
- **Better resource utilization**: Tận dụng tối đa tài nguyên hệ thống

### 2. Tạo Thread

\`\`\`java
// Cách 1: Extend Thread class
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread đang chạy");
    }
}

MyThread thread = new MyThread();
thread.start();

// Cách 2: Implement Runnable
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable đang chạy");
    }
}

Thread thread2 = new Thread(new MyRunnable());
thread2.start();
\`\`\`

## Synchronization

\`\`\`java
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}
\`\`\`

## ExecutorService

\`\`\`java
import java.util.concurrent.*;

ExecutorService executor = Executors.newFixedThreadPool(5);

for (int i = 0; i < 10; i++) {
    executor.submit(() -> {
        System.out.println("Task " + Thread.currentThread().getName());
    });
}

executor.shutdown();
\`\`\`

### 4. Best Practices

- **Ưu tiên ExecutorService**: Thay vì tạo threads trực tiếp, sử dụng ExecutorService
- **Tránh shared mutable state**: Sử dụng immutable objects khi có thể
- **Sử dụng thread-safe collections**: ConcurrentHashMap, CopyOnWriteArrayList
- **Đúng cách shutdown**: Luôn shutdown ExecutorService sau khi sử dụng xong
- **Tránh deadlock**: Cẩn thận với lock order và nested locks

---

## Tổng kết và bước tiếp theo

Java Multithreading là công cụ mạnh mẽ giúp bạn xây dựng các ứng dụng hiệu năng cao. Từ việc tạo threads đơn giản đến sử dụng ExecutorService và xử lý synchronization, hiểu rõ multithreading sẽ giúp bạn viết code Java chuyên nghiệp hơn.

### Tóm tắt

- **Thread**: Đơn vị thực thi nhỏ nhất trong Java
- **Runnable vs Thread**: Ưu tiên implement Runnable
- **Synchronization**: Bảo vệ shared resources khỏi race conditions
- **ExecutorService**: Quản lý threads hiệu quả và chuyên nghiệp

### Bước tiếp theo

Để nâng cao kỹ năng multithreading:

1. **Concurrent Collections**: Tìm hiểu về thread-safe collections
2. **CompletableFuture**: Xử lý asynchronous operations hiện đại
3. **Fork/Join Framework**: Xử lý parallel processing
4. **Thread Pools**: Tối ưu hóa thread pool size
5. **Debugging**: Học cách debug multithreaded applications

Chúc bạn thành công với multithreading! 🚀`,
    category: "Java",
    tags: ["Java", "Multithreading", "Concurrency"],
    author: "Your Name",
    date: "2024-12-20",
    readTime: 10,
  },
  {
    id: "7",
    title: "JavaScript Promises và Fetch API",
    slug: "javascript-promises-va-fetch-api",
    excerpt:
      "Tìm hiểu cách sử dụng Promises và Fetch API để xử lý HTTP requests trong JavaScript hiện đại.",
    content: `# JavaScript Promises và Fetch API

## Xử lý bất đồng bộ với Promises và Fetch API

Xử lý bất đồng bộ (asynchronous operations) là một phần không thể thiếu trong JavaScript hiện đại. Từ việc gọi API, đọc file, đến xử lý user events, hầu hết các thao tác trong web development đều là bất đồng bộ.

Promises và Fetch API đã cách mạng hóa cách chúng ta xử lý các operations bất đồng bộ, thay thế cho callback hell và làm cho code dễ đọc, dễ bảo trì hơn rất nhiều.

Nếu bạn muốn viết code JavaScript hiện đại và chuyên nghiệp, việc nắm vững Promises và Fetch API là điều bắt buộc. Bài viết này sẽ hướng dẫn bạn từ cơ bản đến cách sử dụng chúng trong thực tế.

---

## Tìm hiểu Promises và Fetch API

### 1. Giới thiệu về Promises và Fetch API

**Promises** là một object đại diện cho giá trị có thể có trong tương lai. Nó giúp bạn xử lý các operations bất đồng bộ một cách elegant hơn callbacks.

**Fetch API** là một API hiện đại, dựa trên Promises, cho phép bạn thực hiện HTTP requests một cách dễ dàng và mạnh mẽ.

## Promises

\`\`\`javascript
// Tạo Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    
    if (success) {
        resolve("Thành công!");
    } else {
        reject("Thất bại!");
    }
});

// Sử dụng Promise
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Hoàn thành"));
\`\`\`

## Fetch API

\`\`\`javascript
// GET request
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'John',
        age: 30
    })
})
.then(response => response.json())
.then(data => console.log(data));
\`\`\`

## Async/Await

\`\`\`javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}
\`\`\`

### 4. Best Practices

- **Luôn xử lý errors**: Sử dụng .catch() hoặc try-catch với async/await
- **Kiểm tra response.ok**: Đảm bảo request thành công trước khi parse JSON
- **Timeout handling**: Thêm timeout cho các requests dài
- **Cleanup**: Hủy các requests không cần thiết (AbortController)

---

## Tổng kết và bước tiếp theo

Promises và Fetch API là những công cụ không thể thiếu trong JavaScript hiện đại. Chúng giúp bạn viết code bất đồng bộ dễ đọc, dễ bảo trì và hiệu quả hơn rất nhiều so với callbacks truyền thống.

### Tóm tắt

- **Promises**: Xử lý asynchronous operations một cách elegant
- **Fetch API**: Thực hiện HTTP requests dễ dàng
- **Async/Await**: Syntax sugar giúp code dễ đọc hơn
- **Error Handling**: Quan trọng để có ứng dụng ổn định

### Bước tiếp theo

Để nâng cao kỹ năng xử lý bất đồng bộ:

1. **Axios**: Tìm hiểu thư viện HTTP client phổ biến
2. **Request Cancellation**: Học cách hủy requests với AbortController
3. **Retry Logic**: Implement retry cho failed requests
4. **Request Interceptors**: Middleware cho requests/responses

Chúc bạn code vui vẻ! 🚀`,
    category: "JavaScript",
    tags: ["JavaScript", "Promises", "Fetch API", "Async"],
    author: "Your Name",
    date: "2024-12-21",
    readTime: 7,
  },
  {
    id: "8",
    title: "Java Exception Handling",
    slug: "java-exception-handling",
    excerpt:
      "Học cách xử lý exceptions trong Java một cách hiệu quả với try-catch, finally và custom exceptions.",
    content: `# Java Exception Handling

## Xử lý lỗi chuyên nghiệp với Exception Handling

Trong quá trình phát triển ứng dụng, việc xử lý lỗi là điều không thể tránh khỏi. Có thể là lỗi chia cho 0, file không tồn tại, kết nối mạng bị lỗi, hay dữ liệu không hợp lệ. Exception Handling trong Java cung cấp một cơ chế mạnh mẽ và có cấu trúc để xử lý các lỗi này một cách graceful, giúp ứng dụng của bạn ổn định và dễ debug hơn.

Hiểu rõ cách sử dụng try-catch, finally, và custom exceptions sẽ giúp bạn viết code Java chuyên nghiệp và robust. Bài viết này sẽ hướng dẫn bạn từ cơ bản đến nâng cao về exception handling trong Java.

---

## Các kỹ thuật xử lý Exception

### 1. Giới thiệu về Exception Handling

Exception là một event xảy ra trong quá trình thực thi chương trình làm gián đoạn luồng bình thường của code. Java cung cấp exception handling mechanism để xử lý các lỗi này một cách có kiểm soát.

## Try-Catch-Finally

\`\`\`java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Lỗi chia cho 0: " + e.getMessage());
} finally {
    System.out.println("Khối finally luôn được thực thi");
}
\`\`\`

## Multiple Catch Blocks

\`\`\`java
try {
    // Code có thể ném exception
    int[] arr = new int[5];
    arr[10] = 100;
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Lỗi index: " + e.getMessage());
} catch (Exception e) {
    System.out.println("Lỗi chung: " + e.getMessage());
}
\`\`\`

## Custom Exception

\`\`\`java
class CustomException extends Exception {
    public CustomException(String message) {
        super(message);
    }
}

// Sử dụng
try {
    throw new CustomException("Đây là lỗi tùy chỉnh");
} catch (CustomException e) {
    System.out.println(e.getMessage());
}
\`\`\`

## Throws Keyword

\`\`\`java
public void riskyMethod() throws IOException {
    // Code có thể ném IOException
    throw new IOException("Lỗi I/O");
}
\`\`\`

### 5. Best Practices

- **Catch specific exceptions**: Tránh catch Exception chung chung
- **Không bỏ qua exceptions**: Luôn xử lý hoặc log exceptions
- **Sử dụng try-with-resources**: Tự động đóng resources
- **Cung cấp meaningful messages**: Exception messages rõ ràng

---

## Tổng kết và bước tiếp theo

Exception handling là một kỹ năng quan trọng trong Java. Việc xử lý exceptions đúng cách giúp ứng dụng của bạn ổn định, dễ bảo trì và cung cấp trải nghiệm tốt hơn cho người dùng.

### Tóm tắt

- **Try-Catch-Finally**: Cơ chế xử lý exceptions cơ bản
- **Multiple Catch Blocks**: Xử lý nhiều loại exceptions
- **Custom Exceptions**: Tạo exceptions tùy chỉnh cho business logic
- **Throws**: Khai báo exceptions có thể xảy ra

### Bước tiếp theo

1. **Try-with-resources**: Tự động quản lý resources
2. **Exception hierarchy**: Hiểu rõ exception hierarchy trong Java
3. **Logging**: Sử dụng logging frameworks để log exceptions

Chúc bạn code vui vẻ! 🚀`,
    category: "Java",
    tags: ["Java", "Exception", "Error Handling"],
    author: "Your Name",
    date: "2024-12-22",
    readTime: 6,
  },
  {
    id: "9",
    title: "JavaScript DOM Manipulation",
    slug: "javascript-dom-manipulation",
    excerpt:
      "Học cách thao tác với DOM (Document Object Model) trong JavaScript để tạo trang web động và tương tác.",
    content: `# JavaScript DOM Manipulation

## DOM Manipulation: Tạo trang web động và tương tác

DOM (Document Object Model) là một trong những khái niệm cốt lõi của web development. Nó là một biểu diễn cây cấu trúc của HTML document, cho phép JavaScript tương tác và thay đổi nội dung, cấu trúc, và style của trang web một cách động.

Hiểu rõ DOM Manipulation là điều kiện tiên quyết để tạo ra các trang web tương tác, responsive và hiện đại. Cho dù bạn đang xây dựng một trang web đơn giản hay một Single Page Application (SPA) phức tạp, kỹ năng thao tác với DOM là không thể thiếu.

Bài viết này sẽ hướng dẫn bạn các kỹ thuật DOM manipulation từ cơ bản đến nâng cao, cùng với best practices để code hiệu quả và hiệu năng tốt.

---

## Các kỹ thuật thao tác với DOM

### 1. Giới thiệu về DOM

DOM là một programming interface cho HTML và XML documents. Nó biểu diễn trang web như một cây node objects, mỗi node đại diện cho một phần của document (element, attribute, text, etc.).

## Select Elements

\`\`\`javascript
// getElementById
const element = document.getElementById('myId');

// querySelector
const element2 = document.querySelector('.myClass');
const elements = document.querySelectorAll('.myClass');

// getElementsByTagName
const paragraphs = document.getElementsByTagName('p');
\`\`\`

## Modify Content

\`\`\`javascript
// Thay đổi text
element.textContent = "New text";
element.innerHTML = "<strong>Bold text</strong>";

// Thay đổi attributes
element.setAttribute('class', 'new-class');
element.id = 'new-id';

// Thay đổi style
element.style.color = 'red';
element.style.backgroundColor = 'blue';
\`\`\`

## Create và Append Elements

\`\`\`javascript
// Tạo element mới
const newDiv = document.createElement('div');
newDiv.textContent = "New div";
newDiv.className = "my-class";

// Append vào DOM
document.body.appendChild(newDiv);

// Insert before
const parent = document.getElementById('parent');
const newElement = document.createElement('p');
parent.insertBefore(newElement, parent.firstChild);
\`\`\`

## Event Listeners

\`\`\`javascript
// Add event listener
element.addEventListener('click', function() {
    console.log('Clicked!');
});

// Remove event listener
element.removeEventListener('click', handler);
\`\`\`

DOM Manipulation là nền tảng để tạo các trang web tương tác và động.

### 5. Best Practices

- **Cache DOM queries**: Lưu lại kết quả query để tránh query lại nhiều lần
- **Batch DOM updates**: Tập hợp nhiều thay đổi trước khi update DOM
- **Event delegation**: Sử dụng event delegation cho dynamic content
- **Tránh inline styles**: Sử dụng classes thay vì inline styles

---

## Tổng kết và bước tiếp theo

DOM Manipulation là kỹ năng cơ bản nhưng cực kỳ quan trọng trong web development. Nắm vững các kỹ thuật này sẽ giúp bạn tạo ra các trang web tương tác, động và có hiệu năng tốt.

### Tóm tắt

- **Selecting Elements**: querySelector, getElementById
- **Modifying Content**: textContent, innerHTML, attributes
- **Creating Elements**: createElement, appendChild
- **Event Handling**: addEventListener, event delegation

### Bước tiếp theo

1. **Modern Frameworks**: React, Vue.js sử dụng Virtual DOM
2. **Performance**: Tối ưu hóa DOM manipulation
3. **Browser APIs**: Intersection Observer, Mutation Observer

Chúc bạn code vui vẻ! 🚀`,
    category: "JavaScript",
    tags: ["JavaScript", "DOM", "Web Development"],
    author: "Your Name",
    date: "2024-12-23",
    readTime: 8,
  },
  {
    id: "10",
    title: "Java Stream API",
    slug: "java-stream-api",
    excerpt:
      "Khám phá Java Stream API - cách tiếp cận hiện đại để xử lý collections với functional programming style.",
    content: `# Java Stream API

## Stream API: Functional Programming trong Java

Java Stream API, được giới thiệu trong Java 8, đã cách mạng hóa cách chúng ta xử lý collections. Thay vì sử dụng các vòng lặp imperative (for, while), Stream API cho phép bạn viết code theo phong cách functional programming - ngắn gọn, dễ đọc và dễ hiểu hơn.

Với Stream API, bạn có thể xử lý dữ liệu theo một chuỗi các operations (filter, map, reduce...) một cách elegant và hiệu quả. Đây là một trong những tính năng quan trọng nhất mà mọi Java developer nên nắm vững.

Bài viết này sẽ hướng dẫn bạn từ cơ bản đến nâng cao về Stream API, cùng với các ví dụ thực tế để bạn có thể áp dụng ngay.

---

## Làm việc với Stream API

### 1. Giới thiệu về Stream API

Stream API là một abstraction cho phép bạn xử lý collections theo phong cách functional programming. Stream không lưu trữ dữ liệu; thay vào đó, nó xử lý dữ liệu từ source (như collections) và tạo ra một stream mới.

## Basic Stream Operations

\`\`\`java
import java.util.*;
import java.util.stream.*;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Map
List<Integer> squared = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());

// Reduce
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
\`\`\`

## Intermediate Operations

\`\`\`java
// Sorted
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());

// Distinct
List<Integer> distinct = numbers.stream()
    .distinct()
    .collect(Collectors.toList());

// Limit
List<Integer> firstFive = numbers.stream()
    .limit(5)
    .collect(Collectors.toList());
\`\`\`

## Terminal Operations

\`\`\`java
// Count
long count = numbers.stream().count();

// AnyMatch, AllMatch
boolean hasEven = numbers.stream().anyMatch(n -> n % 2 == 0);
boolean allPositive = numbers.stream().allMatch(n -> n > 0);

// FindFirst
Optional<Integer> first = numbers.stream().findFirst();
\`\`\`

Stream API giúp code Java ngắn gọn, dễ đọc và hiệu quả hơn.

### 4. Best Practices

- **Sử dụng method references**: Làm code ngắn gọn hơn
- **Avoid side effects**: Stream operations nên là pure functions
- **Parallel streams**: Cẩn thận khi sử dụng parallel streams
- **Collectors**: Tận dụng Collectors để transform dữ liệu

---

## Tổng kết và bước tiếp theo

Java Stream API là một công cụ mạnh mẽ giúp bạn viết code Java hiện đại và hiệu quả hơn. Với phong cách functional programming, code của bạn sẽ ngắn gọn, dễ đọc và dễ maintain hơn.

### Tóm tắt

- **Stream Operations**: filter, map, reduce, sorted, distinct
- **Intermediate vs Terminal**: Hiểu sự khác biệt
- **Collectors**: Transform stream thành collections
- **Method References**: Làm code ngắn gọn hơn

### Bước tiếp theo

1. **Parallel Streams**: Xử lý song song cho hiệu năng cao
2. **Custom Collectors**: Tạo collectors tùy chỉnh
3. **Optional**: Làm việc với Optional trong streams

Chúc bạn code vui vẻ! 🚀`,
    category: "Java",
    tags: ["Java", "Stream API", "Functional Programming"],
    author: "Your Name",
    date: "2024-12-24",
    readTime: 7,
  },
  {
    id: "11",
    title: "Xây dựng RESTful API với Spring Boot",
    slug: "xay-dung-restful-api-voi-spring-boot",
    excerpt:
      "Hướng dẫn từng bước xây dựng RESTful API hoàn chỉnh với Spring Boot. Từ setup project, kiến trúc 3 lớp, validation, error handling đến best practices thực tế. Phù hợp cho người mới bắt đầu và muốn nâng cao kỹ năng backend Java.",
    content: `# Xây dựng RESTful API với Spring Boot

## RESTful API với Spring Boot: Hướng dẫn toàn diện

Trong thời đại công nghệ hiện nay, việc xây dựng API là kỹ năng không thể thiếu đối với bất kỳ backend developer nào. RESTful API đã trở thành tiêu chuẩn de facto cho việc giao tiếp giữa các hệ thống, và Spring Boot - framework Java phổ biến nhất - giúp chúng ta xây dựng những API mạnh mẽ một cách nhanh chóng và hiệu quả.

Nếu bạn đang tìm kiếm một hướng dẫn toàn diện về cách tạo một RESTful API hoàn chỉnh với Spring Boot, từ việc setup project cho đến best practices trong thực tế, thì bài viết này dành cho bạn!

---

## Tóm tắt nội dung

Trong bài viết này, bạn sẽ được hướng dẫn từng bước để xây dựng một RESTful API hoàn chỉnh với Spring Boot, bao gồm:

-  **Hiểu về REST API** và các nguyên tắc thiết kế
-  **Setup project Spring Boot** với các dependencies cần thiết
-  **Xây dựng kiến trúc 3 lớp**: Controller - Service - Repository
-  **Xử lý dữ liệu** với Entity, DTO và Spring Data JPA
-  **Validation** và **Error Handling** chuyên nghiệp
-  **Testing API** và các **Best Practices** trong thực tế

Sau khi đọc xong bài viết, bạn sẽ có đủ kiến thức để tự xây dựng một RESTful API production-ready!

---

### 1. Giới thiệu về REST API

REST (Representational State Transfer) là một kiến trúc phần mềm được thiết kế để tạo ra các web services linh hoạt, có thể mở rộng và dễ bảo trì. RESTful API sử dụng các HTTP methods chuẩn để thực hiện các thao tác CRUD (Create, Read, Update, Delete) trên resources:

| HTTP Method | Mô tả | Ví dụ |
|-------------|-------|-------|
| **GET** | Lấy dữ liệu (Read) | Lấy danh sách sản phẩm |
| **POST** | Tạo mới (Create) | Thêm sản phẩm mới |
| **PUT** | Cập nhật toàn bộ (Update) | Cập nhật toàn bộ thông tin sản phẩm |
| **PATCH** | Cập nhật một phần | Chỉ cập nhật giá sản phẩm |
| **DELETE** | Xóa (Delete) | Xóa sản phẩm |

**Nguyên tắc thiết kế REST API:**
- Sử dụng danh từ cho URLs (ví dụ: products thay vì getProducts)
- Sử dụng HTTP status codes phù hợp (200, 201, 400, 404, 500...)
- Stateless: Mỗi request phải chứa đầy đủ thông tin cần thiết
- Sử dụng JSON/XML cho data format

### 2. Setup Project Spring Boot

Để bắt đầu, chúng ta cần tạo một Spring Boot project. Bạn có thể sử dụng [Spring Initializr](https://start.spring.io/) hoặc tạo thủ công. Dưới đây là các dependencies cần thiết:

\`\`\`xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-validation</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
\`\`\`

### 3. Xây dựng Data Model

#### 3.1. Tạo Entity Model

Entity đại diện cho cấu trúc dữ liệu trong database. Dưới đây là ví dụ về Product entity với đầy đủ các tính năng:

\`\`\`java
package com.example.api.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(length = 500)
    private String description;
    
    @Column(nullable = false)
    private Double price;
    
    @Column(nullable = false)
    private Integer stock;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
    
    // Constructors, Getters, Setters
    public Product() {}
    
    public Product(String name, String description, Double price, Integer stock) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    
    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
}
\`\`\`

#### 3.2. Tạo DTO (Data Transfer Object)

DTO (Data Transfer Object) là một design pattern quan trọng giúp:
- **Tách biệt** Entity khỏi API response
- **Bảo vệ** dữ liệu internal (không expose entity trực tiếp)
- **Linh hoạt** trong việc thay đổi cấu trúc dữ liệu
- **Validation** dữ liệu đầu vào

\`\`\`java
package com.example.api.dto;

import jakarta.validation.constraints.*;
import java.time.LocalDateTime;

public class ProductDTO {
    private Long id;
    
    @NotBlank(message = "Tên sản phẩm không được để trống")
    @Size(min = 3, max = 100, message = "Tên sản phẩm phải từ 3 đến 100 ký tự")
    private String name;
    
    @Size(max = 500, message = "Mô tả không được vượt quá 500 ký tự")
    private String description;
    
    @NotNull(message = "Giá không được để trống")
    @Positive(message = "Giá phải là số dương")
    private Double price;
    
    @NotNull(message = "Số lượng không được để trống")
    @Min(value = 0, message = "Số lượng không được âm")
    private Integer stock;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    // Constructors, Getters, Setters
    public ProductDTO() {}
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public Double getPrice() { return price; }
    public void setPrice(Double price) { this.price = price; }
    
    public Integer getStock() { return stock; }
    public void setStock(Integer stock) { this.stock = stock; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
\`\`\`

### 4. Xây dựng Repository Layer

Repository layer là nơi xử lý truy vấn database. Spring Data JPA giúp chúng ta giảm thiểu code boilerplate một cách đáng kể:

\`\`\`java
package com.example.api.repository;

import com.example.api.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    // Tìm kiếm theo tên
    List<Product> findByNameContainingIgnoreCase(String name);
    
    // Tìm sản phẩm có giá trong khoảng
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice")
    List<Product> findByPriceRange(@Param("minPrice") Double minPrice, 
                                    @Param("maxPrice") Double maxPrice);
    
    // Tìm sản phẩm còn hàng
    List<Product> findByStockGreaterThan(Integer stock);
}
\`\`\`

### 5. Xây dựng Service Layer

Service layer chứa business logic của ứng dụng. Đây là nơi xử lý các quy tắc nghiệp vụ, chuyển đổi giữa Entity và DTO:

\`\`\`java
package com.example.api.service;

import com.example.api.dto.ProductDTO;
import com.example.api.entity.Product;
import com.example.api.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductService {
    
    @Autowired
    private ProductRepository productRepository;
    
    // Chuyển đổi Entity sang DTO
    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setPrice(product.getPrice());
        dto.setStock(product.getStock());
        dto.setCreatedAt(product.getCreatedAt());
        dto.setUpdatedAt(product.getUpdatedAt());
        return dto;
    }
    
    // Chuyển đổi DTO sang Entity
    private Product convertToEntity(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());
        product.setDescription(dto.getDescription());
        product.setPrice(dto.getPrice());
        product.setStock(dto.getStock());
        return product;
    }
    
    // Lấy tất cả sản phẩm
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    // Lấy sản phẩm theo ID
    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sản phẩm với ID: " + id));
        return convertToDTO(product);
    }
    
    // Tạo sản phẩm mới
    public ProductDTO createProduct(ProductDTO productDTO) {
        Product product = convertToEntity(productDTO);
        Product savedProduct = productRepository.save(product);
        return convertToDTO(savedProduct);
    }
    
    // Cập nhật sản phẩm
    public ProductDTO updateProduct(Long id, ProductDTO productDTO) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy sản phẩm với ID: " + id));
        
        existingProduct.setName(productDTO.getName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());
        existingProduct.setStock(productDTO.getStock());
        
        Product updatedProduct = productRepository.save(existingProduct);
        return convertToDTO(updatedProduct);
    }
    
    // Xóa sản phẩm
    public void deleteProduct(Long id) {
        if (!productRepository.existsById(id)) {
            throw new RuntimeException("Không tìm thấy sản phẩm với ID: " + id);
        }
        productRepository.deleteById(id);
    }
    
    // Tìm kiếm sản phẩm theo tên
    public List<ProductDTO> searchProducts(String name) {
        return productRepository.findByNameContainingIgnoreCase(name).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
}
\`\`\`

### 6. Xây dựng Controller Layer

Controller là lớp tiếp nhận và xử lý các HTTP requests từ client. Đây là điểm đầu vào của API:

\`\`\`java
package com.example.api.controller;

import com.example.api.dto.ProductDTO;
import com.example.api.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    
    // GET /api/products - Lấy tất cả sản phẩm
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }
    
    // GET /api/products/{id} - Lấy sản phẩm theo ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
        ProductDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }
    
    // POST /api/products - Tạo sản phẩm mới
    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(@Valid @RequestBody ProductDTO productDTO) {
        ProductDTO createdProduct = productService.createProduct(productDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
    
    // PUT /api/products/{id} - Cập nhật sản phẩm
    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody ProductDTO productDTO) {
        ProductDTO updatedProduct = productService.updateProduct(id, productDTO);
        return ResponseEntity.ok(updatedProduct);
    }
    
    // DELETE /api/products/{id} - Xóa sản phẩm
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.noContent().build();
    }
    
    // GET /api/products/search?name=... - Tìm kiếm sản phẩm
    @GetMapping("/search")
    public ResponseEntity<List<ProductDTO>> searchProducts(@RequestParam String name) {
        List<ProductDTO> products = productService.searchProducts(name);
        return ResponseEntity.ok(products);
    }
}
\`\`\`

### 7. Xử lý lỗi (Error Handling)

Một API chuyên nghiệp cần có cơ chế xử lý lỗi thống nhất và rõ ràng. Chúng ta sẽ tạo Global Exception Handler để xử lý tất cả các exception:

\`\`\`java
package com.example.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorResponse> handleRuntimeException(RuntimeException e) {
        ErrorResponse error = new ErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                e.getMessage(),
                LocalDateTime.now()
        );
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationExceptions(
            MethodArgumentNotValidException ex) {
        Map<String, Object> errors = new HashMap<>();
        Map<String, String> fieldErrors = new HashMap<>();
        
        ex.getBindingResult().getAllErrors().forEach((error) -> {
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            fieldErrors.put(fieldName, errorMessage);
        });
        
        errors.put("status", HttpStatus.BAD_REQUEST.value());
        errors.put("message", "Validation failed");
        errors.put("errors", fieldErrors);
        errors.put("timestamp", LocalDateTime.now());
        
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
    
    // Error Response class
    public static class ErrorResponse {
        private int status;
        private String message;
        private LocalDateTime timestamp;
        
        public ErrorResponse(int status, String message, LocalDateTime timestamp) {
            this.status = status;
            this.message = message;
            this.timestamp = timestamp;
        }
        
        // Getters and Setters
        public int getStatus() { return status; }
        public void setStatus(int status) { this.status = status; }
        
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        
        public LocalDateTime getTimestamp() { return timestamp; }
        public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
    }
}
\`\`\`

### 8. Testing API

Sau khi hoàn thành các bước trên, chúng ta có thể test API bằng nhiều cách. Dưới đây là các ví dụ sử dụng cURL để test từng endpoint:

\`\`\`bash
# Tạo sản phẩm mới
curl -X POST http://localhost:8080/api/products \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Laptop Dell XPS",
    "description": "Laptop cao cấp với màn hình 4K",
    "price": 29990000,
    "stock": 10
  }'

# Lấy tất cả sản phẩm
curl http://localhost:8080/api/products

# Lấy sản phẩm theo ID
curl http://localhost:8080/api/products/1

# Cập nhật sản phẩm
curl -X PUT http://localhost:8080/api/products/1 \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Laptop Dell XPS 15",
    "description": "Laptop cao cấp với màn hình 4K, RAM 16GB",
    "price": 32990000,
    "stock": 8
  }'

# Tìm kiếm sản phẩm
curl http://localhost:8080/api/products/search?name=Laptop

# Xóa sản phẩm
curl -X DELETE http://localhost:8080/api/products/1
\`\`\`

### 9. Best Practices và Lời khuyên

Để xây dựng một API chuyên nghiệp, hãy tuân theo các best practices sau:

#### 9.1. Sử dụng DTO Pattern
-  Tách biệt Entity và API response
-  Bảo vệ dữ liệu internal của domain
-  Linh hoạt trong việc thay đổi structure mà không ảnh hưởng database

#### 9.2. Validation đầy đủ
-  Sử dụng Jakarta Validation annotations (@NotNull, @NotBlank, @Size...)
-  Validate cả ở client và server side
-  Trả về error messages rõ ràng, dễ hiểu

#### 9.3. Exception Handling tập trung
-  Sử dụng annotation **@RestControllerAdvice** để xử lý lỗi tập trung
-  Trả về error response format nhất quán
-  Log errors đầy đủ để dễ dàng debug

#### 9.4. Sử dụng HTTP Status Codes đúng chuẩn
| Status Code | Ý nghĩa | Khi nào sử dụng |
|-------------|---------|-----------------|
| **200 OK** | Request thành công | GET, PUT thành công |
| **201 Created** | Tạo mới thành công | POST tạo resource mới |
| **204 No Content** | Xóa thành công | DELETE thành công |
| **400 Bad Request** | Request không hợp lệ | Validation failed |
| **404 Not Found** | Không tìm thấy resource | Resource không tồn tại |
| **500 Internal Server Error** | Lỗi server | Exception không mong đợi |

#### 9.5. RESTful Naming Conventions
-  Sử dụng danh từ số nhiều cho resources: products, users
-  Sử dụng HTTP methods đúng mục đích
-  Nested resources: products/{id}/reviews
-  Tránh động từ trong URLs: ❌ getProducts →  products

#### 9.6. Các lưu ý khác
- Sử dụng pagination cho danh sách dài
- Implement caching khi cần thiết
- Sử dụng HTTPS trong production
- Document API với Swagger/OpenAPI
- Viết unit tests và integration tests

---

## Tổng kết và bước tiếp theo

Trong bài viết này, chúng ta đã cùng nhau xây dựng một RESTful API hoàn chỉnh với Spring Boot từ đầu đến cuối. Chúng ta đã học được:

 **Kiến trúc 3 lớp**: Controller - Service - Repository pattern  
 **Xử lý dữ liệu**: Entity, DTO, và Spring Data JPA  
 **Validation**: Jakarta Validation để đảm bảo dữ liệu hợp lệ  
 **Error Handling**: Global exception handler chuyên nghiệp  
 **Best Practices**: Các nguyên tắc thiết kế REST API  

### Bước tiếp theo

Bây giờ bạn đã có nền tảng vững chắc, hãy thử:

1. **Mở rộng API** với các tính năng như:
   - Pagination và Sorting
   - Filtering và Searching nâng cao
   - Authentication và Authorization với Spring Security

2. **Tích hợp thêm**:
   - Unit Testing với JUnit và Mockito
   - Integration Testing với TestContainers
   - API Documentation với Swagger

3. **Deploy**:
   - Deploy lên cloud (AWS, Azure, GCP)
   - CI/CD pipeline với GitHub Actions

### Kết luận cuối cùng

Spring Boot là một framework mạnh mẽ giúp chúng ta phát triển RESTful API nhanh chóng và hiệu quả. Với những kiến thức trong bài viết này, bạn đã sẵn sàng để xây dựng các ứng dụng backend chuyên nghiệp phục vụ cho các dự án enterprise thực tế.

Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại để lại comment bên dưới. Chúc bạn code vui vẻ! 🚀

---

*Bài viết này là một phần của series học Java và Spring Boot. Hãy tiếp tục theo dõi các bài viết tiếp theo để nâng cao kỹ năng của bạn!*`,
    category: "Java",
    tags: ["Java", "Spring Boot", "REST API", "Backend", "Enterprise"],
    author: "Your Name",
    date: "2024-12-25",
    readTime: 15,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(
  category: string
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

