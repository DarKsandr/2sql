import SyntaxHighlighter from './lib/shCore';
import Brush from './lib/shBrushSql';

Brush.prototype	= new SyntaxHighlighter.Highlighter();
Brush.aliases	= ['sql'];

SyntaxHighlighter.brushes.Sql = Brush;

export default function (){
    SyntaxHighlighter.config.strings.expandSource = '+ expand source';
    SyntaxHighlighter.config.strings.help = '?';
    SyntaxHighlighter.config.strings.alert = 'SyntaxHighlighter\n\n';
    SyntaxHighlighter.config.strings.noBrush = 'Can\'t find brush for: ';
    SyntaxHighlighter.config.strings.brushNotHtmlScript = 'Brush wasn\'t configured for html-script option: ';
    SyntaxHighlighter.defaults['pad-line-numbers'] = false;
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.highlight();
}
