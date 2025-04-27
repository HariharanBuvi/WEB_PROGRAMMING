<%-- dbvalidate.jsp --%>
<%@ page language="java" import="java.sql.,java.util." %>
<%
    String username = request.getParameter("username");
    String email = request.getParameter("email");
    String password = request.getParameter("password");

    Connection conn = null;
    PreparedStatement ps = null;
    ResultSet rs = null;

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "password");

        ps = conn.prepareStatement("SELECT * FROM users WHERE username=? AND email=? AND password=?");
        ps.setString(1, username);
        ps.setString(2, email);
        ps.setString(3, password);
        rs = ps.executeQuery();

        if(rs.next()) {
%>
            <html>
            <head><title>Login Success</title></head>
            <body style="background-color: #d0f0c0; text-align: center;">
                <h1>Login Successful!</h1>
                <h2>Welcome <%= username %>!</h2>
                <p>Email: <%= email %></p>
                <p>Login Time: <%= new java.util.Date() %></p>
                <a href="index.jsp">Logout</a>
            </body>
            </html>
<%
        } else {
%>
            <html>
            <head><title>Login Failed</title></head>
            <body style="background-color: #f8d7da; text-align: center;">
                <h1>Login Failed!</h1>
                <p>Invalid Credentials.</p>
                <a href="index.jsp">Try Again</a>
            </body>
            </html>
<%
        }
    } catch(Exception e) {
        out.println("<h3 style='color:red;'>Exception: " + e.getMessage() + "</h3>");
    } finally {
        try {
            if(rs != null) rs.close();
            if(ps != null) ps.close();
            if(conn != null) conn.close();
        } catch(SQLException e) {
            out.println("<h4>Error Closing Resources: " + e.getMessage() + "</h4>");
        }
    }
%>
