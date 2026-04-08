"""
What's The Move — Website Improvement Strategy Report
Generates a professional PDF deliverable for the client.
"""

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, ListFlowable, ListItem, Flowable
)
from reportlab.pdfgen import canvas
from datetime import date

# ---------- Brand palette ----------
NAVY = colors.HexColor('#00273d')
NAVY_LIGHT = colors.HexColor('#1a4564')
NAVY_PALE = colors.HexColor('#e6ecf1')
EMERALD = colors.HexColor('#10b981')
AMBER = colors.HexColor('#f59e0b')
RED = colors.HexColor('#ef4444')
GRAY = colors.HexColor('#6b7280')
GRAY_LIGHT = colors.HexColor('#f3f4f6')
WHITE = colors.white

OUTPUT = r'C:\Users\info\OneDrive\Desktop\GITHUB\_CLIENT-WEBSITES\whats-the-move\WHATS-THE-MOVE-IMPROVEMENTS-REPORT.pdf'

# ---------- Page decoration ----------
def cover_page(canvas_obj, doc):
    canvas_obj.saveState()
    w, h = LETTER
    # Full navy background
    canvas_obj.setFillColor(NAVY)
    canvas_obj.rect(0, 0, w, h, fill=1, stroke=0)
    # Emerald accent bar
    canvas_obj.setFillColor(EMERALD)
    canvas_obj.rect(0, h - 0.4*inch, w, 0.4*inch, fill=1, stroke=0)
    # Bottom bar
    canvas_obj.setFillColor(EMERALD)
    canvas_obj.rect(0, 0, w, 0.15*inch, fill=1, stroke=0)
    canvas_obj.restoreState()

def content_page(canvas_obj, doc):
    canvas_obj.saveState()
    w, h = LETTER
    # Header bar
    canvas_obj.setFillColor(NAVY)
    canvas_obj.rect(0, h - 0.5*inch, w, 0.5*inch, fill=1, stroke=0)
    canvas_obj.setFillColor(WHITE)
    canvas_obj.setFont('Helvetica-Bold', 9)
    canvas_obj.drawString(0.6*inch, h - 0.3*inch, "WHAT'S THE MOVE — WEBSITE IMPROVEMENT STRATEGY")
    canvas_obj.drawRightString(w - 0.6*inch, h - 0.3*inch, f"Prepared by SkynetJoe Labs")
    # Footer bar
    canvas_obj.setFillColor(NAVY_PALE)
    canvas_obj.rect(0, 0, w, 0.4*inch, fill=1, stroke=0)
    canvas_obj.setFillColor(NAVY)
    canvas_obj.setFont('Helvetica', 8)
    canvas_obj.drawString(0.6*inch, 0.18*inch, "Confidential — Prepared for What's The Move, Charleston SC")
    canvas_obj.drawRightString(w - 0.6*inch, 0.18*inch, f"Page {doc.page}")
    canvas_obj.restoreState()

# ---------- Build styles ----------
def build_styles():
    ss = getSampleStyleSheet()
    styles = {}

    styles['CoverEyebrow'] = ParagraphStyle(
        'CoverEyebrow', parent=ss['Normal'],
        fontName='Helvetica-Bold', fontSize=11,
        textColor=EMERALD, alignment=TA_CENTER,
        spaceAfter=18, letterSpacing=4,
    )
    styles['CoverTitle'] = ParagraphStyle(
        'CoverTitle', parent=ss['Title'],
        fontName='Helvetica-Bold', fontSize=42, leading=48,
        textColor=WHITE, alignment=TA_CENTER, spaceAfter=14,
    )
    styles['CoverSub'] = ParagraphStyle(
        'CoverSub', parent=ss['Normal'],
        fontName='Helvetica', fontSize=16, leading=22,
        textColor=colors.HexColor('#b8c7d3'),
        alignment=TA_CENTER, spaceAfter=40,
    )
    styles['CoverMeta'] = ParagraphStyle(
        'CoverMeta', parent=ss['Normal'],
        fontName='Helvetica', fontSize=11, leading=16,
        textColor=WHITE, alignment=TA_CENTER,
    )

    styles['H1'] = ParagraphStyle(
        'H1', parent=ss['Heading1'],
        fontName='Helvetica-Bold', fontSize=26, leading=32,
        textColor=NAVY, spaceBefore=8, spaceAfter=14,
    )
    styles['H2'] = ParagraphStyle(
        'H2', parent=ss['Heading2'],
        fontName='Helvetica-Bold', fontSize=16, leading=22,
        textColor=NAVY, spaceBefore=14, spaceAfter=8,
    )
    styles['H3'] = ParagraphStyle(
        'H3', parent=ss['Heading3'],
        fontName='Helvetica-Bold', fontSize=12, leading=16,
        textColor=NAVY_LIGHT, spaceBefore=10, spaceAfter=4,
    )
    styles['Eyebrow'] = ParagraphStyle(
        'Eyebrow', parent=ss['Normal'],
        fontName='Helvetica-Bold', fontSize=9,
        textColor=EMERALD, spaceAfter=4, letterSpacing=2,
    )
    styles['Body'] = ParagraphStyle(
        'Body', parent=ss['Normal'],
        fontName='Helvetica', fontSize=10.5, leading=16,
        textColor=colors.HexColor('#1f2937'),
        alignment=TA_JUSTIFY, spaceAfter=8,
    )
    styles['BodyLeft'] = ParagraphStyle(
        'BodyLeft', parent=styles['Body'],
        alignment=TA_LEFT,
    )
    styles['Bullet'] = ParagraphStyle(
        'Bullet', parent=ss['Normal'],
        fontName='Helvetica', fontSize=10, leading=15,
        textColor=colors.HexColor('#1f2937'),
        leftIndent=14, bulletIndent=2, spaceAfter=4,
    )
    styles['Small'] = ParagraphStyle(
        'Small', parent=ss['Normal'],
        fontName='Helvetica', fontSize=9, leading=13,
        textColor=GRAY,
    )
    styles['Callout'] = ParagraphStyle(
        'Callout', parent=ss['Normal'],
        fontName='Helvetica-Oblique', fontSize=11, leading=16,
        textColor=NAVY, leftIndent=10, rightIndent=10,
        spaceBefore=6, spaceAfter=10,
    )
    return styles

S = build_styles()

# ---------- Helpers ----------
def kv_table(rows, col_widths=None):
    """Two-col key-value table."""
    if col_widths is None:
        col_widths = [1.6*inch, 4.9*inch]
    t = Table(rows, colWidths=col_widths)
    t.setStyle(TableStyle([
        ('FONTNAME', (0,0), (0,-1), 'Helvetica-Bold'),
        ('FONTNAME', (1,0), (1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('TEXTCOLOR', (0,0), (0,-1), NAVY),
        ('TEXTCOLOR', (1,0), (1,-1), colors.HexColor('#1f2937')),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LINEBELOW', (0,0), (-1,-1), 0.5, NAVY_PALE),
        ('TOPPADDING', (0,0), (-1,-1), 7),
        ('BOTTOMPADDING', (0,0), (-1,-1), 7),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    return t

def chip_table(label, value, color):
    """Small colored badge."""
    t = Table([[label, value]], colWidths=[0.9*inch, 0.9*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,0), color),
        ('BACKGROUND', (1,0), (1,0), GRAY_LIGHT),
        ('TEXTCOLOR', (0,0), (0,0), WHITE),
        ('TEXTCOLOR', (1,0), (1,0), NAVY),
        ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,0), (-1,-1), 8),
        ('ALIGN', (0,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))
    return t

def section_divider():
    t = Table([['']], colWidths=[6.5*inch], rowHeights=[0.05*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), EMERALD),
    ]))
    return t

def improvement_block(num, title, impact, effort, priority, problem, solution, metrics):
    """Build a boxed improvement card."""
    # Header row
    header_data = [[
        Paragraph(f"<font color='#10b981'><b>#{num:02d}</b></font>  <font color='#00273d'><b>{title}</b></font>", S['H3']),
    ]]
    header = Table(header_data, colWidths=[6.5*inch])
    header.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), NAVY_PALE),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 12),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
    ]))

    # Meta row
    impact_color = EMERALD if impact == 'HIGH' else AMBER if impact == 'MEDIUM' else GRAY
    effort_color = EMERALD if effort == 'LOW' else AMBER if effort == 'MEDIUM' else RED
    priority_color = RED if priority == 'P0' else AMBER if priority == 'P1' else NAVY_LIGHT

    meta = Table([[
        chip_table('IMPACT', impact, impact_color),
        chip_table('EFFORT', effort, effort_color),
        chip_table('PRIORITY', priority, priority_color),
    ]], colWidths=[2.17*inch, 2.17*inch, 2.16*inch])
    meta.setStyle(TableStyle([
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
    ]))

    # Body
    body = [
        Paragraph("<b>Problem</b>", S['Eyebrow']),
        Paragraph(problem, S['BodyLeft']),
        Paragraph("<b>Solution</b>", S['Eyebrow']),
        Paragraph(solution, S['BodyLeft']),
        Paragraph("<b>Expected lift</b>", S['Eyebrow']),
        Paragraph(metrics, S['BodyLeft']),
    ]

    wrapper = [header, Spacer(1, 6), meta, Spacer(1, 8)] + body + [Spacer(1, 14)]
    return KeepTogether(wrapper)

# ---------- Content ----------
def build_story():
    story = []

    # ===================== COVER =====================
    story.append(Spacer(1, 2.0*inch))
    story.append(Paragraph("STRATEGIC AUDIT &amp; GROWTH PLAN", S['CoverEyebrow']))
    story.append(Paragraph("What's The Move", S['CoverTitle']))
    story.append(Paragraph("15 improvements to turn a demo site<br/>into a market-dominant lead machine", S['CoverSub']))
    story.append(Spacer(1, 1.5*inch))
    story.append(Paragraph(f"Prepared for: What's The Move — Charleston, SC", S['CoverMeta']))
    story.append(Spacer(1, 0.1*inch))
    story.append(Paragraph(f"Prepared by: SkynetJoe Labs", S['CoverMeta']))
    story.append(Spacer(1, 0.1*inch))
    story.append(Paragraph(f"Date: {date.today().strftime('%B %d, %Y')}", S['CoverMeta']))
    story.append(Spacer(1, 0.1*inch))
    story.append(Paragraph("Live preview: whats-the-move-nine.vercel.app", S['CoverMeta']))
    story.append(PageBreak())

    # ===================== EXECUTIVE SUMMARY =====================
    story.append(Paragraph("Executive Summary", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 14))

    story.append(Paragraph(
        "The current What's The Move demo site is already ahead of 90% of labor-only moving "
        "competitors in Charleston. It ships with a conversion-focused structure, a live pricing "
        "calculator, a truck-size recommender, an AI-style chat assistant, and a responsive, "
        "brand-aligned design. That's the good news.",
        S['Body']
    ))
    story.append(Paragraph(
        "The bad news: a beautiful website doesn't automatically rank, convert, or scale. "
        "To go from 'demo' to <b>a lead machine that compounds every month</b>, the site needs three "
        "things it doesn't yet have: <b>trust signals</b> (reviews, photos, identity), <b>local SEO "
        "horsepower</b> (neighborhood landing pages + Google Business Profile), and <b>friction removal</b> "
        "(calendar booking, SMS quotes, mobile-first CTAs).",
        S['Body']
    ))
    story.append(Paragraph(
        "This report maps out a 90-day plan to implement 15 high-leverage improvements, ranked by "
        "impact vs effort. Executed in order, they should roughly <b>2–3x booked jobs per month</b> "
        "within 90 days and create defensible SEO moats that are hard for competitors to catch.",
        S['Body']
    ))

    story.append(Spacer(1, 10))
    story.append(Paragraph("The headline numbers", S['H3']))
    story.append(kv_table([
        ["Current state", "Beautiful demo site, no traffic, no real reviews, placeholder contact info"],
        ["Biggest gap", "Zero local SEO footprint (no GBP, no neighborhood pages, no reviews)"],
        ["Top 3 levers", "1) 14 neighborhood landing pages  2) Google Business Profile + reviews  3) Multi-step quote form with SMS"],
        ["Baseline revenue", "~$4,000/mo (assumed current)"],
        ["90-day target", "$7,500 – $11,000/mo (2–3x)"],
        ["6-month target", "$15,000 – $22,000/mo (4–5x)"],
        ["Investment needed", "Labor only — no paid ads required for baseline plan"],
    ]))
    story.append(PageBreak())

    # ===================== CURRENT STATE AUDIT =====================
    story.append(Paragraph("Current State Audit", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 10))

    story.append(Paragraph("What's already working", S['H2']))

    strengths = [
        ("Conversion-focused homepage",
         "Hero has a hard anchor on $50/hr + 7-day availability + sample $200 quote — that's a textbook "
         "Hormozi-grade value prop. Most movers bury pricing behind a phone call."),
        ("Four interactive tools built-in",
         "Live price calculator, truck size recommender, chat widget, and live-activity proof toasts. "
         "Competitors in Charleston have none of these."),
        ("Six-page site structure",
         "Home, How It Works, Service Areas, FAQ, Quote, Contact. Covers every step of the buyer's "
         "journey without bloat."),
        ("Strong brand foundation",
         "Navy / white / emerald accent, Space Grotesk display font, oversized headlines, bento grid. "
         "Looks premium — signals quality without being stuffy."),
        ("Technical SEO fundamentals",
         "Schema.org MovingCompany JSON-LD, sitemap.xml, robots.txt, OG tags, and semantic headings "
         "are all in place."),
        ("Quote form captures the right data",
         "Pickup, drop-off, date, home size, floors, stairs/elevator, large furniture, box count — "
         "everything a crew chief needs to size a job without a callback."),
    ]
    for title, desc in strengths:
        story.append(Paragraph(f"<font color='#10b981'>✓</font>  <b>{title}</b>", S['BodyLeft']))
        story.append(Paragraph(desc, S['Bullet']))

    story.append(Spacer(1, 10))
    story.append(Paragraph("Critical gaps", S['H2']))

    gaps = [
        ("No real reviews or social proof",
         "The site has live-activity toasts and 4.9/5 stats, but zero real Google, Yelp, or Facebook "
         "reviews feeding in. Prospects will Google the name, find nothing, and bounce."),
        ("Placeholder contact info",
         "Phone (843) 555-0100 and hello@whatsthemovecharleston.com are dummies. Every call-to-action "
         "currently leads nowhere."),
        ("No Google Business Profile integration",
         "GBP is the #1 ranking factor for local service businesses. No profile = invisible in the "
         "'movers near me' map pack."),
        ("No individual neighborhood landing pages",
         "Service areas are listed on one page, but each of the 14 areas should have its own URL "
         "(/movers/mount-pleasant, /movers/west-ashley, etc.) to rank for 'movers in [area]'."),
        ("No calendar booking — only a form",
         "Forms convert at 5–10%. Calendar 'pick your slot' widgets convert at 20–30%. This is the "
         "single biggest form conversion lever."),
        ("No real photos or team identity",
         "Stock illustrations only. No crew photos, no 'meet the movers,' no license/insurance badges. "
         "Trust signals are the #1 reason labor-only movers get skipped over."),
        ("No blog / content engine",
         "Zero SEO articles means zero compounding organic traffic. A blog is the single highest-ROI "
         "long-term play for a local service business."),
        ("No analytics installed",
         "No Google Analytics 4, no Meta Pixel, no Microsoft Clarity. You're flying blind — no way "
         "to know what's converting or where users drop off."),
        ("No mobile sticky CTA",
         "70% of local service traffic is mobile. There's no persistent 'Call Now' or 'Get Quote' "
         "button as users scroll, which costs 10–20% of mobile conversions."),
        ("Chat widget is static",
         "Charlie is a decision tree — not connected to a real inbox, CRM, or SMS. Leads from chat "
         "currently go nowhere."),
    ]
    for title, desc in gaps:
        story.append(Paragraph(f"<font color='#ef4444'>✗</font>  <b>{title}</b>", S['BodyLeft']))
        story.append(Paragraph(desc, S['Bullet']))

    story.append(PageBreak())

    # ===================== TOP 15 IMPROVEMENTS =====================
    story.append(Paragraph("Top 15 Improvements (Ranked)", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "Ranked by impact-per-hour-of-work. Priorities: <b>P0</b> = do this week, "
        "<b>P1</b> = do this month, <b>P2</b> = do within 90 days.",
        S['Body']
    ))
    story.append(Spacer(1, 10))

    improvements = [
        # (num, title, impact, effort, priority, problem, solution, metrics)
        (1, "Build 14 neighborhood landing pages",
         "HIGH", "MEDIUM", "P0",
         "Right now all 14 Charleston neighborhoods share one page. Google can't rank a single URL "
         "for 14 different 'movers in [neighborhood]' queries — it forces you to pick one and loses "
         "the rest.",
         "Create a programmatic template at /movers/[slug] that auto-generates a unique page per "
         "area with: neighborhood-specific hero image, local landmarks, average job size, 3 sample "
         "quotes for that area, and customer reviews from that ZIP. Link all 14 from the footer and "
         "the service-areas page.",
         "Expected: 30–60 new keyword rankings in 60 days. Primary driver of organic leads by day 90."),

        (2, "Set up Google Business Profile + review engine",
         "HIGH", "LOW", "P0",
         "No GBP means you don't exist in the 'movers near me' map pack — which gets 44% of all "
         "local service clicks. Competitors with 30+ reviews will dominate regardless of how "
         "beautiful this site is.",
         "Claim and verify GBP (free). Add photos, service area, hours, services, and pricing. "
         "Install a review-request automation (free option: Google's own review link sent via SMS "
         "after every job; paid option: NiceJob or Podium at ~$99/mo).",
         "First 10 reviews within 30 days typically lift map-pack rankings 2–3 positions. Target: "
         "50+ reviews in 90 days."),

        (3, "Replace placeholder contact info with real phone/email + SMS number",
         "HIGH", "LOW", "P0",
         "Every CTA on the site currently points at (843) 555-0100 — a dummy number. "
         "Until this is fixed, the site literally cannot generate a lead.",
         "Swap in the real phone number, hello@ email, and ideally a Twilio or OpenPhone SMS line "
         "that the owner can read on his phone. Update serviceAreas.js, Schema.org JSON-LD, and "
         "every tel: link in one pass.",
         "Obvious — turns on the entire lead channel. Do this in the first 30 minutes of week 1."),

        (4, "Add calendar booking ('pick your slot') widget",
         "HIGH", "MEDIUM", "P0",
         "Forms convert at 5–10%. Calendar widgets convert at 20–30% because they remove the "
         "'will they call me back?' uncertainty that kills 60% of mobile visitors.",
         "Add a Cal.com (free) or SavvyCal embed on the /quote page: 'Pick a time for a 10-min "
         "quote call.' The owner blocks off slots in his own Google Calendar. Zero friction, "
         "zero back-and-forth.",
         "2–3x conversion rate on the quote page. Biggest single conversion lever on the site."),

        (5, "Install full analytics stack",
         "HIGH", "LOW", "P0",
         "Without data, every other improvement in this report is a guess. No GA4, no Meta Pixel, "
         "no Microsoft Clarity heatmaps means there's no way to know what's working.",
         "Install all four in one afternoon: Google Analytics 4 (free), Meta Pixel (free), "
         "Microsoft Clarity for session recordings (free), and Google Tag Manager as the container. "
         "Fire events on: calculator_use, chat_open, quote_submit, phone_click.",
         "Enables every downstream decision. Also enables Meta / Google retargeting ads later."),

        (6, "Add real photos and 'Meet the crew' page",
         "HIGH", "LOW", "P1",
         "Trust is the #1 blocker for labor-only movers. Prospects are literally inviting strangers "
         "into their home to touch their stuff. Stock illustrations don't solve this — faces do.",
         "Spend 1 Saturday with a phone camera: photograph the crew in uniform, a branded truck (if "
         "any), a real move in progress, and 10–15 before/after shots. Create a /about page with "
         "owner's story and crew bios. Add license/insurance badges.",
         "Typically lifts quote-page conversion 15–25%. Bigger effect on higher-ticket jobs ($400+)."),

        (7, "Multi-step quote form (progressive disclosure)",
         "HIGH", "LOW", "P1",
         "The current quote form is one long page with 15+ fields. Mobile users see a wall of "
         "labels and bounce. Conversion rate on long single-page forms is ~5%.",
         "Split into 4 steps: Step 1 = Home size + date (2 fields, 90% completion). Step 2 = "
         "pickup/dropoff addresses. Step 3 = furniture + stairs. Step 4 = contact info. Progress "
         "bar at the top. Still submits to Web3Forms.",
         "Typically doubles form completion rate. From ~5% → ~10%."),

        (8, "Sticky mobile 'Call / Quote' CTA bar",
         "MEDIUM", "LOW", "P1",
         "70% of traffic will be mobile. As they scroll past the hero, there's no persistent CTA. "
         "They have to scroll all the way back up to book.",
         "Fixed bar at the bottom of mobile viewport: '📞 Call' on left (tel: link), 'Get Quote' "
         "on right (anchor to form). Only shows on mobile, only after 400px scroll.",
         "Typically adds 10–20% to mobile conversions. Two-hour implementation."),

        (9, "Launch a blog with 5 cornerstone articles",
         "HIGH", "MEDIUM", "P1",
         "Zero content = zero long-tail SEO traffic. A blog is the cheapest source of compounding "
         "organic leads for any local service business.",
         "Write 5 cornerstone articles targeting Charleston-specific long-tail keywords: "
         "(1) 'How much do movers cost in Charleston?' (2) 'Best time of year to move in Charleston' "
         "(3) 'Charleston moving checklist' (4) 'How to move in downtown Charleston (narrow streets, "
         "no parking)' (5) 'Labor-only vs full-service movers: which is cheaper?'",
         "Expected: 500–2,000 monthly organic visitors by month 6. Compounds forever."),

        (10, "Lead magnet: 'Charleston Moving Checklist' PDF",
         "MEDIUM", "LOW", "P1",
         "Right now the only conversion action is 'get a quote.' That's a high-commitment ask for "
         "someone 4 weeks out from moving. Need a lower-commitment email capture.",
         "Build a branded PDF checklist: '60-Day Charleston Move Checklist.' Gate it behind email. "
         "Now you have an email list of every Charleston resident planning to move — even if they "
         "book 4 weeks later. Drip them a 5-email sequence ending with a 10% off coupon.",
         "Typically captures 3–5x more emails than a quote form alone. Builds long-term list asset."),

        (11, "Connect chat widget to real SMS / CRM",
         "MEDIUM", "MEDIUM", "P1",
         "'Charlie' the chat widget currently only runs a decision tree. Any lead that chats in "
         "literally goes nowhere — it's a demo.",
         "Option A (cheap): pipe conversations into a Slack channel or SMS via a Netlify/Vercel "
         "serverless function. Option B (better): connect to a real CRM (GoHighLevel, Close, or "
         "even a free Trello board) so every chat = a trackable lead.",
         "Recovers 100% of currently-lost chat leads. Also enables follow-up on no-shows."),

        (12, "Military / student / senior discount landing pages",
         "MEDIUM", "LOW", "P2",
         "Charleston has 3 massive feeder populations: Joint Base Charleston (military), College "
         "of Charleston + MUSC (students), and retirees. Generic pricing pages don't speak to them.",
         "Build three landing pages: /military-movers-charleston (with 10% discount + PCS-friendly "
         "language), /student-movers-charleston (dorm move specials), /senior-movers-charleston "
         "(extra care language + AARP discount). Each ranks for its own keyword cluster.",
         "Typically adds 20–40% more qualified leads from these segments. Low effort, high precision."),

        (13, "Referral program ('Give $25, Get $25')",
         "MEDIUM", "LOW", "P2",
         "Happy moving customers tell other movers — but only if you ask them. Right now there's "
         "no referral mechanic in place.",
         "Add a /refer page and a footer link. 'Refer a friend who books = $25 Venmo to you, $25 "
         "off their move.' Track via a simple referral code or just their name. Promote in every "
         "post-move thank-you email.",
         "Typically drives 10–15% of all new bookings for local service businesses."),

        (14, "Exit-intent popup with limited-time offer",
         "MEDIUM", "LOW", "P2",
         "90% of first-time visitors leave without converting. Exit-intent popups recover a "
         "measurable slice of them before they're gone forever.",
         "Mouse-leave detection on desktop + 30-second scroll-up on mobile. Popup: 'Wait — book "
         "this week and get your first hour free.' Captures email or sends to quote form.",
         "Typically recovers 2–4% of abandoning visitors. At scale = 15–20 extra leads/month."),

        (15, "Paid ads readiness: Meta + Google Local Services Ads",
         "HIGH", "MEDIUM", "P2",
         "Once the site is converting and GBP is stacked with reviews, paid ads become profitable. "
         "Starting paid ads before that = burning money.",
         "After 50+ GBP reviews and solid analytics: launch Google Local Services Ads (pay-per-lead, "
         "shows above the map pack) and Meta retargeting to past site visitors. Budget: $500/mo to "
         "start, scale to $2–5k/mo based on CPL.",
         "Local Services Ads typically hit $30–60 cost per lead for movers. At 30% close rate and "
         "$300 avg job = 3–5x ROAS."),
    ]

    for imp in improvements:
        story.append(improvement_block(*imp))

    story.append(PageBreak())

    # ===================== 90-DAY ROADMAP =====================
    story.append(Paragraph("90-Day Execution Roadmap", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 12))

    roadmap = [
        ["Week", "Focus", "Deliverables"],
        ["1",
         "Foundations (P0 only)",
         "• Replace placeholder phone / email\n• Claim Google Business Profile\n"
         "• Install GA4, Meta Pixel, Clarity, GTM\n• Connect quote form to real inbox"],
        ["2–3",
         "Local SEO moat",
         "• Build /movers/[slug] template\n• Write 14 unique neighborhood pages\n"
         "• Submit sitemap to GSC\n• Start requesting reviews from past customers"],
        ["4–6",
         "Conversion optimization",
         "• Cal.com calendar booking on /quote\n• Multi-step form refactor\n"
         "• Sticky mobile CTA bar\n• Real photos + /about page"],
        ["7–9",
         "Trust &amp; content engine",
         "• Launch /blog\n• Publish 5 cornerstone articles\n• Lead magnet PDF + drip email\n"
         "• Connect chat widget to SMS/CRM"],
        ["10–12",
         "Revenue multipliers",
         "• Military / student / senior landing pages\n• Referral program page\n"
         "• Exit-intent popup\n• Launch Google Local Services Ads"],
    ]

    t = Table(roadmap, colWidths=[0.7*inch, 1.8*inch, 4.0*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('TEXTCOLOR', (0,0), (-1,0), WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTSIZE', (0,0), (-1,-1), 9.5),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('ALIGN', (0,0), (0,-1), 'CENTER'),
        ('TEXTCOLOR', (0,1), (0,-1), EMERALD),
        ('FONTNAME', (0,1), (0,-1), 'Helvetica-Bold'),
        ('FONTSIZE', (0,1), (0,-1), 14),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [WHITE, GRAY_LIGHT]),
        ('LINEBELOW', (0,0), (-1,-1), 0.5, NAVY_PALE),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t)
    story.append(Spacer(1, 14))

    story.append(Paragraph("Weekly time commitment", S['H3']))
    story.append(Paragraph(
        "Weeks 1–3 are front-loaded: ~10 hours of dev work + ~3 hours of content writing. "
        "Weeks 4–12 settle into ~5 hours/week of marketing ops (review requests, blog posts, "
        "tweaks based on analytics). Total 90-day effort: roughly 80–100 hours.",
        S['Body']
    ))

    story.append(PageBreak())

    # ===================== STRATEGIC MOATS =====================
    story.append(Paragraph("Strategic Moats", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "Individual improvements are useful. But the real goal is to build <b>compounding moats</b> "
        "that a competitor can't catch up on by just 'building a nicer website.' Here are the four "
        "moats this plan creates.",
        S['Body']
    ))

    moats = [
        ("1. Review Moat (GBP + On-Site)",
         "Once you hit 50+ real Google reviews, the map pack ranking is extremely hard to dislodge. "
         "Competitors would need 6+ months of consistent review velocity to catch up. Defensible, "
         "compounding, and free."),
        ("2. Local SEO Moat (14 Neighborhood Pages + Blog)",
         "Google rewards topical authority. By month 6, if the site has 14 neighborhood pages + "
         "20+ blog posts all linking to each other, no competitor can catch up without 6–12 months "
         "of content work."),
        ("3. Data Moat (Analytics + Email List)",
         "Every visitor who lands on the site and downloads the PDF joins an owned email list. "
         "That list compounds monthly and is impossible for a competitor to access. At month 12, "
         "this list should drive 20–30% of all bookings."),
        ("4. Brand Moat (Identity + Chat Persona)",
         "'Charlie' the chat bot, the emerald + navy palette, the calculator-first pricing stance — "
         "these turn 'What's The Move' from a generic mover into a recognizable local brand. Brand "
         "= pricing power = higher margins."),
    ]

    for title, desc in moats:
        story.append(Paragraph(f"<b>{title}</b>", S['H3']))
        story.append(Paragraph(desc, S['Body']))
        story.append(Spacer(1, 4))

    story.append(PageBreak())

    # ===================== REVENUE PROJECTIONS =====================
    story.append(Paragraph("Revenue Projections", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "Projections assume a $300 average job value (based on 2 movers × 3 hours at $50/hr + "
        "stair/add-on fees) and a 30% close rate on qualified leads. These are conservative mid-range "
        "numbers — top quartile performance would be 25–40% higher.",
        S['Body']
    ))
    story.append(Spacer(1, 10))

    proj = [
        ["Stage", "Leads/mo", "Close Rate", "Jobs/mo", "Avg Ticket", "Monthly Revenue"],
        ["Baseline (today)", "~45", "30%", "~13", "$300", "$4,000"],
        ["30 days", "~65", "32%", "~21", "$305", "$6,400"],
        ["60 days", "~95", "33%", "~31", "$310", "$9,600"],
        ["90 days", "~115", "35%", "~40", "$315", "$12,600"],
        ["6 months", "~180", "38%", "~68", "$325", "$22,100"],
    ]

    t = Table(proj, colWidths=[1.3*inch, 1.0*inch, 1.0*inch, 0.9*inch, 1.0*inch, 1.3*inch])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), NAVY),
        ('TEXTCOLOR', (0,0), (-1,0), WHITE),
        ('FONTNAME', (0,0), (-1,0), 'Helvetica-Bold'),
        ('FONTNAME', (0,1), (-1,-1), 'Helvetica'),
        ('FONTNAME', (-1,1), (-1,-1), 'Helvetica-Bold'),
        ('TEXTCOLOR', (-1,1), (-1,-1), EMERALD),
        ('FONTSIZE', (0,0), (-1,-1), 10),
        ('ALIGN', (1,0), (-1,-1), 'CENTER'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [WHITE, GRAY_LIGHT]),
        ('LINEBELOW', (0,0), (-1,-1), 0.5, NAVY_PALE),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t)
    story.append(Spacer(1, 14))

    story.append(Paragraph(
        "At the 6-month mark, the site should be generating roughly <b>5–6x baseline revenue</b> "
        "with no paid ad spend — purely from SEO, conversion optimization, reviews, and the email "
        "list. Adding Google Local Services Ads at month 4+ can push this another 40–60%.",
        S['Body']
    ))
    story.append(Spacer(1, 8))

    story.append(Paragraph("Investment &amp; ROI", S['H3']))
    story.append(kv_table([
        ["Tools (mo)", "$0–99  — GA4, Cal.com, Web3Forms all free; optional NiceJob $99/mo"],
        ["Paid ads (optional)", "$0 for baseline plan; $500–2,000/mo at month 4+"],
        ["Dev/design labor", "Covered under SkynetJoe engagement"],
        ["Expected Month-3 revenue lift", "+$6,000 – $8,000/mo over baseline"],
        ["Expected Month-6 revenue lift", "+$15,000 – $18,000/mo over baseline"],
        ["Payback period", "Immediate (labor covered, tool cost &lt;$100/mo)"],
    ]))

    story.append(PageBreak())

    # ===================== NEXT ACTIONS =====================
    story.append(Paragraph("Next Actions", S['H1']))
    story.append(section_divider())
    story.append(Spacer(1, 12))

    story.append(Paragraph("This week (P0 only — non-negotiable)", S['H2']))
    p0 = [
        "Swap placeholder phone and email for real ones (30 min)",
        "Claim and verify Google Business Profile (1 hour)",
        "Install GA4, Meta Pixel, Clarity via Tag Manager (2 hours)",
        "Request the first 5 Google reviews from past customers (30 min)",
        "Connect quote form submissions to the owner's real inbox (15 min)",
    ]
    for item in p0:
        story.append(Paragraph(f"<font color='#10b981'>▸</font>  {item}", S['BodyLeft']))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 12))
    story.append(Paragraph("This month (P1)", S['H2']))
    p1 = [
        "Build the 14-neighborhood landing page template and content",
        "Add Cal.com calendar booking to /quote",
        "Shoot real crew photos + build /about page",
        "Refactor quote form into a multi-step wizard",
        "Add sticky mobile CTA bar",
        "Launch /blog + write the first 5 cornerstone articles",
    ]
    for item in p1:
        story.append(Paragraph(f"<font color='#f59e0b'>▸</font>  {item}", S['BodyLeft']))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 12))
    story.append(Paragraph("Within 90 days (P2)", S['H2']))
    p2 = [
        "Build military, student, and senior landing pages",
        "Launch 'Give $25, Get $25' referral program",
        "Add exit-intent popup with 'first hour free' offer",
        "Build lead magnet PDF + 5-email drip sequence",
        "Launch Google Local Services Ads once 30+ reviews are stacked",
    ]
    for item in p2:
        story.append(Paragraph(f"<font color='#6b7280'>▸</font>  {item}", S['BodyLeft']))
        story.append(Spacer(1, 2))

    story.append(Spacer(1, 22))
    story.append(section_divider())
    story.append(Spacer(1, 14))
    story.append(Paragraph("Let's book the Zoom", S['H2']))
    story.append(Paragraph(
        "This plan is aggressive but every single item is ROI-positive and proven in local service "
        "businesses. Recommended next step: a 30-minute Zoom to walk through this report, prioritize "
        "the P0 list against your actual calendar, and get the domain connected. Once the site goes "
        "live on the real domain with real contact info and GBP, everything else compounds from there.",
        S['Body']
    ))
    story.append(Spacer(1, 10))
    story.append(Paragraph(
        "<b>— SkynetJoe Labs</b><br/>Prepared by Waseem Nasir<br/>skynetjoe.com",
        S['Body']
    ))

    return story

# ---------- Build document ----------
def main():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=LETTER,
        leftMargin=0.6*inch, rightMargin=0.6*inch,
        topMargin=0.75*inch, bottomMargin=0.6*inch,
        title="What's The Move — Website Improvement Strategy",
        author="SkynetJoe Labs",
        subject="Strategic audit and 90-day growth plan",
    )

    story = build_story()

    # Different page templates: cover uses cover_page, rest use content_page
    def on_first_page(canvas_obj, doc):
        cover_page(canvas_obj, doc)

    def on_later_pages(canvas_obj, doc):
        content_page(canvas_obj, doc)

    doc.build(story, onFirstPage=on_first_page, onLaterPages=on_later_pages)
    print(f"[OK] Generated: {OUTPUT}")

if __name__ == '__main__':
    main()
