<!DOCTYPE html>
<head>
  <!-- <%= require('html-loader!./tpl-included/head.html') %> -->
  <title>webpack4 : home </title>
</head>

<body>
  <div class="page page-home">
    <!-- Header : begin -->
   <!-- <%= require('html-loader!./tpl-included/header.html') %> -->
    <!-- Header : end  -->
    <!--middle : begin  -->
    <div class="middle">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="slide-test">
              <div class="box min-sm"> </div>
              <div class="box min-md"></div>
              <div class="box min-lg"></div>
            </div>
          </div>
        </div>
        <div class="row">
            <div class="col"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vitae consequatur sit provident blanditiis recusandae modi odit sequi a animi tempore, totam id possimus ad molestias corporis iusto autem? Iusto!</div>
        </div>
      </div>
    </div>
    <!--middle : end  -->
   <!-- <%= require('html-loader!./tpl-included/footer.html') %> --> 
  </div>
</body>

</html>