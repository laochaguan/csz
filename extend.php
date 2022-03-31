<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

use Flarum\Extend;
use Flarum\Frontend\Document;
return [
    // Register extenders here to customize your forum!
    (new Extend\Frontend('forum'))
        ->content(function (Document $document) {
$document->head[] = '
<link rel="stylesheet" media="" class="nightmode-light" href="../assets/forumy.css?v=3757f891" />
<meta name="description" content="512长生文化·康养哲学(http://www.csz.cq.cn)是一个长生镇综合性的资源分享网站，如长生镇图片、长生镇视频、范长生简介、长生花海、长生新闻、福利分享等！立志于提供全网最全面的资源整合；网站内容来源于互联网收集，仅仅只适用于学习和交流测试。">
<meta name="keywords" content="长生镇,长生花海,福利分享,长生镇图片,长生镇视频,康养哲学,长生花海,长生新闻,范长生,长生大帝">
	';		
}),
    
];
