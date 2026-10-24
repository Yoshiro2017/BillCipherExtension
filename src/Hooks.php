<?php

namespace MediaWiki\Extension\BillCipherExtension;

use OutputPage;
use Parser;
use Skin;

class BillCipherHooks {

    /**
     * Registers <deal> tag with MediaWiki Parser
     */
    public static function onParserFirstCallInit( Parser $parser ) {
        $parser->setHook( 'deal', [ __CLASS__, 'renderDealTag' ] );
    }

    /**
     * Renders the <deal> parser tag
     */
    public static function renderDealTag( $text, array $args, Parser $parser, \PPFrame $frame ) {
        $offer = htmlspecialchars( $text ?: 'A permanent golden spot on this page.' );
        $html = '<div class="bill-cipher-deal-box">';
        $html .= '<div class="bill-eye">👁️</div>';
        $html .= '<h3>A Deal Has Been Proposed!</h3>';
        $html .= '<p>' . $offer . '</p>';
        $html .= '<button class="bill-deal-btn" onclick="makeBillCipherDeal()">Shake My Hand</button>';
        $html .= '</div>';

        return $html;
    }

    /**
     * Attaches JavaScript and CSS resources to the skin output
     */
    public static function onBeforePageDisplay( OutputPage $out, Skin $skin ) {
        $out->addModules( 'ext.billcipher' );
    }
}
