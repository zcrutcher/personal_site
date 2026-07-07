module ApplicationHelper
  require "commonmarker"
  def render_markdown(text)
    return "" if text.blank?
    html = Commonmarker.to_html(text).html_safe
  end
end
