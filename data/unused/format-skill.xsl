<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="2.0"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xi="http://www.w3.org/2001/XInclude"
  xs:noNamespace="gwdata.xsd"
  xmlns:f="local">

  <xsl:output method="text" use-character-maps="crlf"/>
  <xsl:character-map name="crlf">
    <xsl:output-character character="&#10;" string="&#13;&#10;"/>
  </xsl:character-map>
  
  <xsl:variable name="apos">'</xsl:variable>
  <xsl:variable name="adrenal" select="exists(//@adCost)"/>
  <xsl:variable name="default-margin" select="78"/>

  <xsl:template match="/Attribute[@name = 'No Attribute']">
    <xsl:call-template name="format-attribute">
      <xsl:with-param name="indent" select="''"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template match="/Profession">
    <xsl:call-template name="format-profession">
      <xsl:with-param name="indent" select="''"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="format-profession">
    <xsl:param name="indent" select="''"/>
    <xsl:variable name="indent2" select="concat($indent, '  ')"/>
    <xsl:call-template name="start-tag">
      <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
    <xsl:value-of select="f:copyAttrs((@name, @code, @abbrev, @color, @campaign))"/>
    <xsl:if test="@desc">
      <xsl:text>&#10;</xsl:text>
      <xsl:value-of select="f:copyWrapAttr(@desc, $indent2, $default-margin)"/>
    </xsl:if>
    <xsl:text>&gt;&#10;</xsl:text>

    <xsl:for-each select="Attribute[@name != 'No Attribute']">
      <xsl:sort select="@name"/>
      <xsl:call-template name="format-attribute">
        <xsl:with-param name="indent" select="$indent2"/>
      </xsl:call-template>
    </xsl:for-each>
    <xsl:for-each select="Attribute[@name = 'No Attribute']">
      <xsl:call-template name="format-attribute">
        <xsl:with-param name="indent" select="$indent2"/>
      </xsl:call-template>
    </xsl:for-each>

    <xsl:call-template name="end-tag">
      <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
  </xsl:template>


  <xsl:template name="format-attribute">
    <xsl:param name="indent" select="''"/>
    <xsl:variable name="indent2" select="concat($indent, '  ')"/>

    <xsl:call-template name="start-tag">
      <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
    <xsl:value-of select="f:copyAttrs((@code, @name, @abbrev))"/>
    <xsl:if test="@primary"> primary="true"</xsl:if>
    <xsl:if test="@skillAdjust"> skillAdjust="true"</xsl:if>
    <xsl:if test="@desc">
      <xsl:text>&#10;</xsl:text>
      <xsl:value-of select="f:copyWrapAttr(@desc, $indent2, $default-margin)"/>
    </xsl:if>
    <xsl:text>&gt;&#10;</xsl:text>

    <xsl:for-each select="Skill">
      <xsl:sort select="@name"/>
      <xsl:call-template name="format-skill">
        <xsl:with-param name="indent" select="$indent2"/>
      </xsl:call-template>
    </xsl:for-each>

    <xsl:call-template name="end-tag">
      <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
  </xsl:template>


  <xsl:template name="format-skill">
    <xsl:param name="indent" select="''"/>
    <xsl:variable name="indent2" select="concat($indent, '  ')"/>
    <xsl:call-template name="start-tag">
      <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
    <xsl:value-of select="f:copyAttrs((@code, @name, @campaign))"/>
    <xsl:value-of select="concat('&#10;',$indent2)"/>
    <xsl:value-of select="f:copyAttrs((@type, @elite, @allowMultiple))"/>
    <xsl:value-of select="concat('&#10;',$indent2)"/>
    <xsl:value-of select="f:copyAttrs((@enCost, @adCost, @activation, @recharge, @upkeep))"/>
    <xsl:text>&#10;</xsl:text>
    <xsl:value-of select="f:copyWrapAttr(@desc, $indent2, $default-margin)"/>
    <xsl:text>&gt;&#10;</xsl:text>

    <xsl:for-each select="Effect">
      <xsl:call-template name="format-effect">
        <xsl:with-param name="indent" select="$indent2"/>
      </xsl:call-template>
    </xsl:for-each>

    <xsl:call-template name="end-tag">
      <xsl:with-param name="indent" select="$indent"/>
    </xsl:call-template>
  </xsl:template>


  <xsl:template name="format-effect">
    <xsl:param name="indent" select="''"/>
    <xsl:variable name="indent2" select="concat($indent, '  ')"/>
    <xsl:variable name="attrs" select="(@fixed, @at0, @at15)"/>
    <xsl:value-of select="$indent"/>
    <xsl:text>&lt;Effect</xsl:text>
    <xsl:if test="exists($attrs)">
      <xsl:text> </xsl:text>
      <xsl:value-of select="f:copyAttrs($attrs)"/>
    </xsl:if>
    <xsl:value-of select="concat('&gt;', text(), '&lt;/Effect&gt;&#10;')"/>
  </xsl:template>


  <xsl:template name="start-tag">
    <xsl:param name="indent" select="''"/>
    <xsl:param name="tag" select="name(.)"/>

    <xsl:choose>
      <xsl:when test="string-length($indent) = 0">
        <xsl:text>&lt;?xml version="1.0"?>&#10;&lt;</xsl:text>
        <xsl:value-of select="$tag"/>
        <xsl:text> xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"&#10;</xsl:text>
        <xsl:text>  xsi:noNamespaceSchemaLocation="gwdata.xsd"&#10;  </xsl:text>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="concat($indent, '&lt;', $tag, ' ')"/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template name="end-tag">
    <xsl:param name="indent" select="''"/>
    <xsl:param name="tag" select="name(.)"/>
    <xsl:value-of select="concat($indent, '&lt;/', $tag, '&gt;&#10;')"/>
  </xsl:template>


  <xsl:function name="f:copyAttrs" as="xs:string">
    <xsl:param name="attrs"/>

    <xsl:variable name="out">
      <xsl:for-each select="$attrs">
        <xsl:value-of select="concat(name(.), '=&quot;', 
          replace(., '&quot;', '&amp;quot;'), '&quot;')"/>
        <xsl:if test="position() != last()"><xsl:text> </xsl:text></xsl:if>
      </xsl:for-each>
    </xsl:variable>
    <xsl:value-of select="$out"/>
  </xsl:function>

  <xsl:function name="f:copyWrapAttr" as="xs:string">
    <xsl:param name="attr"/>
    <xsl:param name="indent"/>
    <xsl:param name="margin"/>

    <xsl:variable name="prefix" select="concat($indent, name($attr), '=&quot;')"/>
    <xsl:variable name="words" select="tokenize(replace($attr, '&quot;', '&amp;quot;'), '\s+')"/>

    <xsl:variable name="out">
      <xsl:value-of select="$prefix"/>
      <xsl:if test="exists($words)">
        <xsl:call-template name="copyWrapStep">
          <xsl:with-param name="words" select="$words"/>
          <xsl:with-param name="pos" select="string-length($prefix)"/>
          <xsl:with-param name="indent" select="$indent"/>
          <xsl:with-param name="margin" select="$margin"/>
        </xsl:call-template>
      </xsl:if>
      <xsl:text>&quot;</xsl:text>
    </xsl:variable>
    <xsl:value-of select="$out"/>
  </xsl:function>

  <xsl:template name="copyWrapStep">
    <xsl:param name="words"/>
    <xsl:param name="pos"/>
    <xsl:param name="indent"/>
    <xsl:param name="margin"/>
    <xsl:choose>
      <xsl:when test="$pos + string-length($words[1]) + 1 > $margin">
        <xsl:value-of select="concat('&#10;', $indent)"/>
        <xsl:value-of select="$words[1]"/>
        <xsl:if test="count($words) > 1">
          <xsl:text> </xsl:text>
          <xsl:call-template name="copyWrapStep">
            <xsl:with-param name="words" select="subsequence($words, 2)"/>
            <xsl:with-param name="pos" select="string-length($indent) + string-length($words[1]) + 1"/>
            <xsl:with-param name="indent" select="$indent"/>
            <xsl:with-param name="margin" select="$margin"/>
          </xsl:call-template>
        </xsl:if>
      </xsl:when>
      <xsl:otherwise>
        <xsl:value-of select="$words[1]"/>
        <xsl:if test="count($words) > 1">
          <xsl:text> </xsl:text>
          <xsl:call-template name="copyWrapStep">
            <xsl:with-param name="words" select="subsequence($words, 2)"/>
            <xsl:with-param name="pos" select="$pos + string-length($words[1]) + 1"/>
            <xsl:with-param name="indent" select="$indent"/>
            <xsl:with-param name="margin" select="$margin"/>
          </xsl:call-template>
        </xsl:if>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

</xsl:stylesheet>

