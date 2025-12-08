import { BlogPost } from "@/types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Giới thiệu về Java và JVM",
    slug: "gioi-thieu-ve-java-va-jvm",
    excerpt:
      "Tìm hiểu về ngôn ngữ lập trình Java và Java Virtual Machine (JVM) - nền tảng của nhiều ứng dụng enterprise hiện đại.",
    content: `# Giới thiệu về Java và JVM

Java là một ngôn ngữ lập trình hướng đối tượng, được phát triển bởi Sun Microsystems (nay thuộc Oracle) vào năm 1995. Java được thiết kế với triết lý "Write Once, Run Anywhere" (WORA), cho phép code chạy trên bất kỳ nền tảng nào có cài đặt Java Virtual Machine (JVM).

## Java Virtual Machine (JVM)

JVM là một máy ảo thực thi bytecode Java. Khi bạn compile code Java, nó được chuyển thành bytecode (.class file), sau đó JVM sẽ thực thi bytecode này.

\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

## Ưu điểm của Java

- **Đa nền tảng**: Code một lần, chạy mọi nơi
- **Bảo mật cao**: Sandbox security model
- **Hiệu năng tốt**: JIT compilation
- **Ecosystem phong phú**: Nhiều thư viện và framework

Java là lựa chọn hàng đầu cho các ứng dụng enterprise, Android development, và hệ thống lớn.`,
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

ES6 (ECMAScript 2015) đã mang đến nhiều tính năng mới giúp JavaScript trở nên mạnh mẽ và dễ sử dụng hơn.

## Arrow Functions

Arrow functions cung cấp cú pháp ngắn gọn hơn:

\`\`\`javascript
// ES5
var multiply = function(a, b) {
    return a * b;
};

// ES6+
const multiply = (a, b) => a * b;
\`\`\`

## Destructuring

Destructuring cho phép extract dữ liệu từ arrays và objects:

\`\`\`javascript
// Array destructuring
const [first, second] = [1, 2];

// Object destructuring
const { name, age } = { name: "John", age: 30 };
\`\`\`

## Promises và Async/Await

Xử lý bất đồng bộ trở nên dễ dàng hơn:

\`\`\`javascript
// Promise
fetch('/api/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Async/Await
async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}
\`\`\`

Những tính năng này giúp code JavaScript hiện đại, dễ đọc và dễ bảo trì hơn.`,
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

Java Socket API cung cấp các công cụ mạnh mẽ để xây dựng ứng dụng network.

## Server Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class Server {
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(8080);
            System.out.println("Server đang chờ kết nối...");
            
            Socket clientSocket = serverSocket.accept();
            PrintWriter out = new PrintWriter(
                clientSocket.getOutputStream(), true
            );
            BufferedReader in = new BufferedReader(
                new InputStreamReader(clientSocket.getInputStream())
            );
            
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                out.println("Echo: " + inputLine);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

## Client Socket

\`\`\`java
import java.net.*;
import java.io.*;

public class Client {
    public static void main(String[] args) {
        try {
            Socket socket = new Socket("localhost", 8080);
            PrintWriter out = new PrintWriter(
                socket.getOutputStream(), true
            );
            BufferedReader in = new BufferedReader(
                new InputStreamReader(socket.getInputStream())
            );
            
            out.println("Hello Server!");
            String response = in.readLine();
            System.out.println("Server response: " + response);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
\`\`\`

Java Socket là nền tảng cho nhiều ứng dụng network như web servers, chat applications, và game servers.`,
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

Collections Framework là một trong những tính năng quan trọng nhất của Java, cung cấp các cấu trúc dữ liệu và thuật toán.

## List Interface

\`\`\`java
import java.util.*;

// ArrayList
List<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add("JavaScript");

// LinkedList
List<Integer> linkedList = new LinkedList<>();
linkedList.add(1);
linkedList.add(2);
\`\`\`

## Map Interface

\`\`\`java
// HashMap
Map<String, Integer> map = new HashMap<>();
map.put("Java", 95);
map.put("Python", 90);

// TreeMap (sorted)
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Apple", 10);
treeMap.put("Banana", 20);
\`\`\`

## Set Interface

\`\`\`java
// HashSet (no duplicates)
Set<String> set = new HashSet<>();
set.add("Java");
set.add("Java"); // Duplicate, sẽ bị bỏ qua

// TreeSet (sorted, no duplicates)
Set<Integer> treeSet = new TreeSet<>();
treeSet.add(3);
treeSet.add(1);
treeSet.add(2);
// Kết quả: [1, 2, 3]
\`\`\`

Collections Framework giúp làm việc với dữ liệu trở nên dễ dàng và hiệu quả hơn.`,
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

Closures là một trong những khái niệm quan trọng nhất trong JavaScript.

## Scope trong JavaScript

\`\`\`javascript
// Global scope
var globalVar = "I'm global";

function outerFunction() {
    // Function scope
    var outerVar = "I'm in outer function";
    
    function innerFunction() {
        // Inner function scope
        var innerVar = "I'm in inner function";
        console.log(globalVar); // Có thể truy cập
        console.log(outerVar);  // Có thể truy cập
    }
    
    innerFunction();
}
\`\`\`

## Closures

Closure cho phép function truy cập biến từ scope bên ngoài ngay cả sau khi function bên ngoài đã return:

\`\`\`javascript
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
\`\`\`

## Ứng dụng thực tế

\`\`\`javascript
// Module pattern
const calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        getResult: function() {
            return result;
        }
    };
})();

calculator.add(5).multiply(2);
console.log(calculator.getResult()); // 10
\`\`\`

Hiểu closures giúp bạn viết code JavaScript tốt hơn và tránh các lỗi phổ biến.`,
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

Multithreading cho phép chương trình Java thực thi nhiều tác vụ đồng thời.

## Tạo Thread

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

Multithreading giúp tận dụng tối đa tài nguyên CPU và cải thiện hiệu năng ứng dụng.`,
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

Promises và Fetch API là công cụ mạnh mẽ để xử lý bất đồng bộ trong JavaScript.

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

Fetch API là cách hiện đại để thực hiện HTTP requests trong JavaScript.`,
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

Exception handling là kỹ thuật quan trọng để xử lý lỗi trong Java.

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

Exception handling giúp ứng dụng Java ổn định và dễ debug hơn.`,
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

DOM Manipulation cho phép JavaScript thay đổi nội dung và cấu trúc của trang web.

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

DOM Manipulation là nền tảng để tạo các trang web tương tác và động.`,
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

Stream API giúp xử lý collections một cách declarative và functional.

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

Stream API giúp code Java ngắn gọn, dễ đọc và hiệu quả hơn.`,
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

## 📖 Mở bài

Trong thời đại công nghệ hiện nay, việc xây dựng API là kỹ năng không thể thiếu đối với bất kỳ backend developer nào. RESTful API đã trở thành tiêu chuẩn de facto cho việc giao tiếp giữa các hệ thống, và Spring Boot - framework Java phổ biến nhất - giúp chúng ta xây dựng những API mạnh mẽ một cách nhanh chóng và hiệu quả.

Nếu bạn đang tìm kiếm một hướng dẫn toàn diện về cách tạo một RESTful API hoàn chỉnh với Spring Boot, từ việc setup project cho đến best practices trong thực tế, thì bài viết này dành cho bạn!

---

## 📋 Tóm tắt nội dung

Trong bài viết này, bạn sẽ được hướng dẫn từng bước để xây dựng một RESTful API hoàn chỉnh với Spring Boot, bao gồm:

-  **Hiểu về REST API** và các nguyên tắc thiết kế
-  **Setup project Spring Boot** với các dependencies cần thiết
-  **Xây dựng kiến trúc 3 lớp**: Controller - Service - Repository
-  **Xử lý dữ liệu** với Entity, DTO và Spring Data JPA
-  **Validation** và **Error Handling** chuyên nghiệp
-  **Testing API** và các **Best Practices** trong thực tế

Sau khi đọc xong bài viết, bạn sẽ có đủ kiến thức để tự xây dựng một RESTful API production-ready!

---

## 💡 Thân bài

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
- 📝 Sử dụng pagination cho danh sách dài
- 📝 Implement caching khi cần thiết
- 📝 Sử dụng HTTPS trong production
- 📝 Document API với Swagger/OpenAPI
- 📝 Viết unit tests và integration tests

---

## 🎯 Kết luận

Trong bài viết này, chúng ta đã cùng nhau xây dựng một RESTful API hoàn chỉnh với Spring Boot từ đầu đến cuối. Chúng ta đã học được:

 **Kiến trúc 3 lớp**: Controller - Service - Repository pattern  
 **Xử lý dữ liệu**: Entity, DTO, và Spring Data JPA  
 **Validation**: Jakarta Validation để đảm bảo dữ liệu hợp lệ  
 **Error Handling**: Global exception handler chuyên nghiệp  
 **Best Practices**: Các nguyên tắc thiết kế REST API  

### 📚 Bước tiếp theo

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

### 💬 Kết luận cuối cùng

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

