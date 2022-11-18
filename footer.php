
<footer class="footer">
    <?php 
        wp_nav_menu(array( 
            "menu" => "footer",
            "container" => "nav"
        ))
    ?>

    <?php 
        get_sidebar('header_links');
    ?>
</footer>

</body>

<?php wp_footer() ?>

</html>