<template>
<!-- ナビゲーションバーをダークテーマで設定 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- タイトル -->
  <a class="navbar-brand" href="#">Notion</a>

  <!-- 画面サイズに応じて折りたたむ設定 -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <!-- メニュー全体 -->
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav">
      <!-- ノートリストページへのリンク -->
      <li class="nav-item">
        <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-file-lines" /> ノートリスト</a>
      </li>

      <!-- 学習用ページへのリンク -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <font-awesome-icon icon="fa-solid fa-user-graduate" /> 学習用ページ
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">学習1</a></li>
          <li><a class="dropdown-item" href="#">学習2</a></li>
          <li><a class="dropdown-item" href="#">学習3</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>