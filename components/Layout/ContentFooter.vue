<template>
<footer class="footer">
    <div class="container-fluid">
        <ul class="nav">
            <li class="nav-item">
                <a href="/" rel="noopener" class="nav-link">
                    Analysis
                </a>
            </li>
            <li class="nav-item">
                <a href="/analytics" rel="noopener" class="nav-link">
                    Analytics
                </a>
            </li>
            <li class="nav-item">
                <a href="/about" rel="noopener" class="nav-link">
                    About Us
                </a>
            </li>
        </ul>
        <div class="copyright">
            &copy; {{ year }}, made by

            <a href="/about" rel="noopener">Anshul Mishra</a>
            for and
            <a href="/about" rel="noopener">Aman Negi</a>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        };
    }
};
</script>

<style></style>
