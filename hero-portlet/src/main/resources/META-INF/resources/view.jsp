<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%@ include file="/init.jsp" %>

<c:set var="ns"><portlet:namespace /></c:set>

<div id="hero-container-${ns}"></div>

<script data-union-widget="hero" data-union-container="hero-container-${ns}" type="application/json"></script>