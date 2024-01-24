# Inline vs Block elements

## Specification

> "In a block formatting context, boxes are laid out one after the other, vertically, beginning at the top of a containing block. The vertical distance between two sibling boxes is determined by the 'margin' properties. Vertical margins between adjacent block-level boxes in a block formatting context collapse.
> In a block formatting context, each box's left outer edge touches the left edge of the containing block (for right-to-left formatting, right edges touch)."

> "In an inline formatting context, boxes are laid out horizontally, one after the other, beginning at the top of a containing block. Horizontal margins, borders, and padding are respected between these boxes. The boxes may be aligned vertically in different ways: their bottoms or tops may be aligned, or the baselines of text within them may be aligned. The rectangular area that contains the boxes that form a line is called a line box."

Basically:

- inline elements don't start on a new line and only take up as much width as necessary. We should be careful when trying to style these elements as there are some restrictions around using `width`, `height` and `margin`
- block elements start on a new line and extend to the full width available.
- 

## All inline elementss

A list of inline elements:

- `<a>` - Anchor
- `<abbr>` - Abbreviation
- `<acronym>` - Acronym (deprecated in HTML5, use `<abbr>` instead)
- `<b>` - Bold
- `<br>` - Line Break
- `<code>` - Code
- `<em>` - Emphasis
- `<i>` - Italic
- `<img>` - Image (but acts like an inline-block)
- `<span>` - Generic Inline Container
- `<strong>` - Strong Importance
- `<sub>` - Subscript
- `<sup>` - Superscript
- `<time>` - Time
- `<var>` - Variable

## Additional resources:

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow
